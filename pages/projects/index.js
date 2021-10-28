import { CgArrowLeftR } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import { NavbarProjects } from '../../components/Navbarprojects';
import Head from 'next/head';
import languageColors from '../projects/github-language.colors';
import {useSpring, animated} from 'react-spring'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users/anthonybartczak/repos?sort=creation`)
  const repos = await res.json();

  return {
    props: {
      repos,
    },
  }
}


function Projects( {repos} ) {

  const fade = useSpring({ from: { opacity: 0}, to: { opacity: 1},  duration: 2000})

  const getColorMap = (langName) => {
    return languageColors[langName]
  }

  return (
      <>
        <style global jsx>{`
            body {
              height: 100%;
              background-color: #161B22;
            }
        `}</style>


        <div className="repo-body">
        <Head>
          <title>Anthony Bartczak Portfolio</title>
        </Head>
        <NavbarProjects/>
        <div className="dark-bg">
          {repos && (
          <div className="mt-8 pb-4 mx-8 grid gap-4 xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 md:gap-16 grid-flow-row items-center">
          {repos.map(repo => (
            <animated.div style={fade} key={repo.id}>
              <div className="relative my-2">
                <div className="filter absolute -inset-0.5 bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative rounded-xl border-black bg-gray-800 shadow-xl border-opacity-50 p-8">
                    <h2 className="repo-name mr-4">{repo.name}</h2>
                    <div className="repo-lang-wrapper flex">
                      <div className="repo-lang-dot" style={{backgroundColor: getColorMap(repo.language)}}></div>
                      <div className="repo-language">{repo.language}</div>
                    </div>
                      <a className="absolute top-4 right-4 text-4xl" target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                        <button className="btn-github">
                          <SiGithub/>
                        </button>
                      </a>
                  </div>
                </div>
              </animated.div>
          ))}
        </div>
        )}
        </div>
        </div>
      </>
    )
}

export default Projects