import Link from 'next/link';
import { FunctionComponent } from 'react';
import { ArticleMeta } from '../interfaces/article';

interface IProps {
  article: ArticleMeta;
  type: string;
};

const Card: FunctionComponent<IProps> = ({ article, type }) => {
  const baseUrl = type === 'article' ? 'articles' : 'projects'

  return <Link href={`/${baseUrl}/${article.slug}`}>
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  </Link>;
};

export default Card;
