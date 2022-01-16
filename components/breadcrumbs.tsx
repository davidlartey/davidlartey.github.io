import Link from 'next/link';
import { FunctionComponent } from "react";

interface IProps {
  links: Object[]
}

const Breadcrumbs: FunctionComponent<IProps> = ({ links }) => {
  return (
    <div className='flex flex-row justify-start items-center space-x-4'>
      {
        links.map((link, index) => {
          if (index === (links.length - 1)) {
            return <h3>{link.title}</h3>
          }
          return (
            <div className='inline-block border-b border-gray-300'>
              <Link href={link.href}>{link.title}</Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default Breadcrumbs;
