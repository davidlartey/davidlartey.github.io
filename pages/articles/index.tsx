import Card from '../../components/card';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleMeta } from '../../interfaces/article';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../../components/breadcrumbs';

interface IProps {
  articles: ArticleMeta[];
}

const ArticlesHome: FunctionComponent<IProps> = ({ articles }) => {
  return (
    <div className='px-4 py-10 max-w-3xl mx-auto'>
      <Breadcrumbs 
        links={[
          {
            title: 'Home',
            href: '/'
          },
          {
            title: 'All Articles'
          }
        ]}
      />

      <div className='pt-10'>
        <div className='border-b-2 border-gray-200 p-0 mb-10  flex flex-row justify-between items-center'>
          <h1
            className='text-2xl text-gray-800 font-medium border-b-4 inline-block border-gray-600 pb-2'
            style={{ marginBottom: '-2px' }}
          >
            All Articles
          </h1>
        </div>
        {
          articles.map((article, i) => (
            <Card
              key={i}
              article={article}
              type="article"
            />
          ))
        }
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("content/articles");
  
  let articles = files.reverse().map(file => {
      const data = fs
          .readFileSync(`content/articles/${file}`)
          .toString();

      return {
          ...matter(data).data,
          slug: file.split('.')[0]
      };
  });

  return {
    props: {
      articles,
    }
  };
}

export default ArticlesHome;
