import Link from 'next/link';
import { FunctionComponent } from 'react';
import { ArticleMeta } from '../interfaces/article';

interface IProps {
  article: ArticleMeta;
  type: string;
};

const Card: FunctionComponent<IProps> = ({ article, type }) => {
  const baseUrl = type === 'article' ? 'articles' : 'projects'

  return (
    <div>
      <h1 className='inline-block text-gray-900 font-medium text-xl'>
        <Link href={`/${baseUrl}/${article.slug}`}>
          {article.title}
        </Link>
      </h1>
      <p className='text-gray-800 mt-2 pb-8'>
        {article.description}
      </p>
    </div>
  );
};

export default Card;
