import Card from '../components/card';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleMeta } from '../interfaces/article';
import { FunctionComponent } from 'react';
import MarkdownComponent from '../components/markdown';
import Link from 'next/link';
import Image from 'next/image';
import pic from '../davidlartey-dbilovd.dev.jpg'

interface IProps {
  articles: ArticleMeta[];
  about: string;
  projects: ArticleMeta[];
}

const Home: FunctionComponent<IProps> = ({ articles, about, projects }) => {
  
  return (
    <div className='px-4 pt-8 md:pt-10 pb-10 max-w-3xl mx-auto'>
      <div className='pt-2 pb-12 flex flex-col md:flex-row justify-center md:justify-start space-y-6 md:space-y-0 space-x-0 md:space-x-6'>
        <div className='flex justify-center md:justify-start'>
          <Image
            src={pic}
            width={300}
            height={300}
            className='rounded-md'
          />
        </div>
        <div className='grow flex flex-col justify-between items-center md:items-start space-y-6'>
          <div className=''>
            <h2 className='font-bold text-4xl'>
              David Lartey
            </h2>
            <h4 className='text-3xl font-light'>
              #LifeIsBeautiful
            </h4>
          </div>
          <div>
            <div className='flex flex-row justify-start items-center space-x-3'>
              <a
                href='https://twitter.com/dbilovd'
                target="__blank"
              >
                <h3 className='border-b border-gray-300 cursor-pointer pb-1'>
                  Twitter
                </h3>
              </a>
              <a
                href='https://github.com/dbilovd'
                target="__blank"
              >
                <h3 className='border-b border-gray-300 cursor-pointer pb-1'>
                  Github
                </h3>
              </a>
              <a
                href='https://www.linkedin.com/in/dbilovd'
                target="__blank"
              >
                <h3 className='border-b border-gray-300 cursor-pointer pb-1'>
                  LinkedIn
                </h3>
              </a>
              <a
                href='https://stackoverflow.com/story/dbilovd'
                target="__blank"
              >
                <h3 className='border-b border-gray-300 cursor-pointer pb-1'>
                  StackOverflow
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='border-b-2 border-gray-200 p-0 mb-10'>
          <h1
            className='text-2xl text-gray-800 font-medium border-b-4 inline-block border-gray-600 pb-2'
            style={{ marginBottom: '-2px' }}
          >
            About Me
          </h1>
        </div>
        <MarkdownComponent content={about} />
      </div>

      <div className='pt-10'>
        <div className='border-b-2 border-gray-200 p-0 mb-10  flex flex-row justify-between items-center'>
          <h1
            className='text-2xl text-gray-800 font-medium border-b-4 inline-block border-gray-600 pb-2'
            style={{ marginBottom: '-2px' }}
          >
            Articles
          </h1>
          <a href='/articles'>More articles</a>
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

        <div
          className='inline-block  text-gray-900 font-medium text-xl border-b border-gray-300 mb-5'
        >
          <Link href='/articles'>See more articles...</Link>
        </div>
      </div>

      <div className='pt-10'>
        <div className='border-b-2 border-gray-200 p-0 mb-10  flex flex-row justify-between items-center'>
          <h1
            className='text-2xl text-gray-800 font-medium border-b-4 inline-block border-gray-600 pb-2'
            style={{ marginBottom: '-2px' }}
          >
            Projects
          </h1>
          <a href='/projects'>More projects</a>
        </div>
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

      <div className='pt-12 justify-center flex flex-row items-center space-x-2'>
        <span>❤️</span>
        <span>🇬🇭</span>
        <span>🇳🇬</span>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("content/articles");

  let articles = files.reverse().slice(0, 3).map(file => {
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
