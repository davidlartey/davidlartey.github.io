import Card from '../components/card';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleMeta } from '../interfaces/article';
import { FunctionComponent } from 'react';

interface IProps {
  articles: ArticleMeta[];
  about: string;
  projects: ArticleMeta[];
}

const Home: FunctionComponent<IProps> = ({ articles, about, projects }) => {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        {about}
      </div>

      <h1>Articles</h1>
      {
        articles.map((article, i) => (
          <Card
            key={i}
            article={article}
            type="article"
          />
        ))
      }

      <h1>Projects</h1>
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

  const projectFiles = fs.readdirSync("content/projects");
  let projects = projectFiles.reverse().map(projectFile => {
      const data = fs
          .readFileSync(`content/projects/${projectFile}`)
          .toString();

      return {
          ...matter(data).data,
          slug: projectFile.split('.')[0]
      };
  });

  let about = fs.readFileSync(`content/about.md`).toString()

  return {
    props: {
      about,
      articles,
      projects
    }
  };
}

export default Home;
