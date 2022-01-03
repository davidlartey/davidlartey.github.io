import Card from '../../components/card';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleMeta } from '../../interfaces/article';
import { FunctionComponent } from 'react';

interface IProps {
  articles: ArticleMeta[];
}

const ArticlesHome: FunctionComponent<IProps> = ({ articles }) => {
  return (
    <div>
      <h1>All Articles</h1>
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
