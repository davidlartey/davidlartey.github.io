import Link from 'next/link';
import { FunctionComponent } from "react";

interface Link {
  title: String,
  href?: URL,
}
interface IProps {
  links: Link[]
}

const Breadcrumbs: FunctionComponent<IProps> = ({ links }) => {
  return (
    <div className='flex flex-row justify-start items-center space-x-4'>
      {
        links.map((link, index) => {
          if (index === (links.length - 1)) {
            return <h3 key={index}>{link.title}</h3>
          }
          return (
            <div 
              key={index}
              className='inline-block border-b border-gray-300'
            >
              <Link href={link.href || '/'}>{link.title}</Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default Breadcrumbs;
