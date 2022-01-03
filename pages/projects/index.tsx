import Card from '../../components/card';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleMeta } from '../../interfaces/article';
import { FunctionComponent } from 'react';

interface IProps {
  projects: ArticleMeta[];
}

const PRojectsHome: FunctionComponent<IProps> = ({ projects }) => {
  return (
    <div>
      <h1>All Projects</h1>
      {
        projects.map((project, i) => (
          <Card
            key={i}
            article={project}
            type="project"
          />
        ))
      }
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("content/projects");
  let projects = files.reverse().map(file => {
      const data = fs
          .readFileSync(`content/projects/${file}`)
          .toString();

      return {
          ...matter(data).data,
          slug: file.split('.')[0]
      };
  });

  return {
    props: {
      projects
    }
  };
}

export default PRojectsHome;
