import Head from 'next/head';
import Image from 'next/image';
import { Roadmap } from '../components/Roadmap';
import { Navbar } from '../components/Navbar';
import { Technologies } from '../components/Technologies';
import { FaYoutube, FaTwitch, FaGithub, FaLinkedin} from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import Particles from "react-tsparticles";
import particlesConfig from '../styles/particlesConfig';

function Index() {

  return (
    <>
      <div id='home' className=''>
        <Head>
          <title>Anthony Bartczak Portfolio</title>
        </Head>
        <Navbar/>
        <div>
          <Particles className="particles-background" params={particlesConfig} />
        </div>
        <main className="p-6 max-w-sm mx-auto bg-gray-50 dark:bg-slate-700 rounded-s shadow-2xl items-center my-5 flex flex-wrap justify-center">
          <div className="filter brightness-110 drop-shadow-xl backdrop-blur-lg object-contain">
            <Image width="751" height="660"src="/index-pic.jpg" alt="..." loading="eager" className="rounded-md max-w-full h-auto align-middle border-none"/>
          </div>
          <div className='m-4 align-middle font-abel text-xl subpixel-antialiased font-medium text-center'>
          Hey! My name is Anthony,<br/><Typewriter
            options={{
              strings: ['I do IT stuff.', 'I do Warhammer stuff.', 'I do guitar stuff.'],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
          <div className='align-middle justify-center'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/antoni-bartczak-525187183/">
              <button className="btn-social">
                <FaLinkedin/>
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/anthonybartczak">
              <button className="btn-social">
                <FaGithub/>
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/canadian_1">
              <button className="btn-social">
                <FaTwitch/>
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCPeryow1nJ7sElSp_xcYFLQ">
              <button className="btn-social">
                <FaYoutube/>
              </button>
            </a>
          </div>
        </main>
        <section id="timeline">
          <Roadmap/>
        </section>
        <section id="tech-stack">
          <Technologies/>
        </section>
      </div>
  </>
  )
}

export default Index