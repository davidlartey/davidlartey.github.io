import { FunctionComponent } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleInfo } from './../../interfaces/article';
import Markdown from './../../components/markdown';
import Link from 'next/link';
import Breadcrumbs from '../../components/breadcrumbs';

interface IProps {
  article: ArticleInfo
}

const Article: FunctionComponent<IProps> = ({ article }) => {
  return (
    <div className='px-4 py-10 max-w-3xl mx-auto'>
      <Breadcrumbs 
        links={[
          {
            title: 'Home',
            href: '/'
          },
          {
            title: 'All Articles',
            href: '/articles'
          },
          {
            title: article.meta.title
          }
        ]}
      />

      <h1 className='inline-block text-gray-900 font-medium text-2xl pt-10'>
        {article.meta.title}
      </h1>
      
      <div className='text-gray-800 mt-6 pb-8'>
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
