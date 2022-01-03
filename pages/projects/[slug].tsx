import { FunctionComponent } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleInfo } from './../../interfaces/article';
import Markdown from './../../components/markdown';

interface IProps {
  project: ArticleInfo
}

const Project: FunctionComponent<IProps> = ({ project }) => {
  console.log({ project })
  return (
    <div>
      <h1>{project.meta.title}</h1>
      <div>
        <Markdown content={project.content} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("content/projects");
  const paths = files.map(file => ({
    params: {
      slug: file.split('.')[0]
    }
  }))
  
  return {
      paths,
      fallback: false,
  }
}

export async function getStaticProps({ ...context }) {
  const { slug } = context.params;

  console.log({ slug, context })

  const content = fs
      .readFileSync(`content/projects/${slug}.md`)
      .toString();

  const info = matter(content);

  const project = {
    meta: {
      ...info.data,
      slug
    },
    content: info.content
  }

  return {
    props: {
      project
    }
  }
}

export default Project;
