import { FunctionComponent } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleInfo } from './../../interfaces/article';
import Markdown from '../../components/markdown';
import Breadcrumbs from '../../components/breadcrumbs';

interface IProps {
  project: ArticleInfo
}

const Project: FunctionComponent<IProps> = ({ project }) => {
  return (
    <div className='px-4 py-10 max-w-3xl mx-auto'>
      <Breadcrumbs 
        links={[
          {
            title: 'Home',
            href: '/'
          },
          {
            title: 'All Projects',
            href: '/projects'
          },
          {
            title: project.meta.title
          }
        ]}
      />

      <h1 className='inline-block text-gray-900 font-medium text-2xl pt-10'>
        {project.meta.title}
      </h1>
      
      <div className='text-gray-800 mt-6 pb-8'>
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
