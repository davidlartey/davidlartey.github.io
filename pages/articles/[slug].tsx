import { FunctionComponent } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleInfo } from './../../interfaces/article';
import Markdown from './../../components/markdown';

interface IProps {
  article: ArticleInfo
}

const Article: FunctionComponent<IProps> = ({ article }) => {
  return (
    <div>
      <h1>{article.meta.title}</h1>
      <div>
        <Markdown content={article.content} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("content/articles");
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

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = fs
      .readFileSync(`content/articles/${slug}.md`)
      .toString();

  const info = matter(content);

  const article = {
    meta: {
      ...info.data,
      slug
    },
    content: info.content
  }

  return {
    props: {
      article: article
    }
  }
}

export default Article;
