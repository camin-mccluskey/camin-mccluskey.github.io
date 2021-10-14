import { useState } from 'react';
import useDarkMode from '../utils/useDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Resume from '../content/resume/resume.pdf';
import { PopupWidget } from "react-calendly";
import Data from '../data';
import ArticleCard from '../components/ArticleCard';
import ProjectsList from '../components/ProjectsList';


function Home() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [activeSection, setActiveSection] = useState("thoughts");

  return (
    <div className="dark:bg-black bg-gray-100 min-w-screen min-h-screen darkTrans pb-20">
      <div className="flex flex-col justify-center w-full pt-10 relative">
        {/* Dark mode toggle */}
        <div className="top-0 right-0 p-2 md:p-5 fixed z-50">
          <input id="toggle" class="toggle" type="checkbox" value={darkMode} onChange={e => setDarkMode(!darkMode)}/>
        </div>

        {/* Title */}
        <div className="flex justify-center">
          <div className="flex text-3xl md:text-5xl text-center dark:text-white darkTrans font-mono">
            <p className="pr-2">{'>'}</p>
            <p className="h-full pb-1.5 pr-0.5 overflow-x-hidden overflow-y-visible border-r-4 tracking-tight whitespace-nowrap animate-typing">camin-mccluskey</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5 md:space-x-10 justify-center md:pt-1 dark:text-white text-xl md:text-3xl">
          <a href="https://twitter.com/Camin_McCluskey"><FontAwesomeIcon icon={faTwitter} className="highlight"/></a>
          <a href="https://medium.com/@caminmccluskey"><FontAwesomeIcon icon={faMedium} className="highlight" /></a>
          <a href="https://www.linkedin.com/in/camin-mccluskey"><FontAwesomeIcon icon={faLinkedin} className="highlight" /></a>
          <a href="https://github.com/camin-mccluskey"><FontAwesomeIcon icon={faGithub} className="highlight" /></a>
        </div>

        {/* Bio */}
        <div className="flex justify-center py-5">
          <p className="dark:text-white w-4/5 darkTrans">
            I'm an entrepreneur currently building something new at <a className="link" target="_blank" rel="noopener noreferrer" href="https://joinef.com">Entrepreneur First</a>. Before that I was a full stack software engineer at Skyscanner, a data analyst at Amazon and worked at some interesting startups. I am also the co-founder of an app for housemates - <a className="link" target="_blank" rel="noopener noreferrer" href="https://inhouseapp.io">inHouse</a>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-4/5 h-px dark:bg-gray-200 darkTrans bg-gray-800 self-center my-5"/>

        {/* Section Headings */}
        <div className="grid grid-cols-3 w-4/5 mx-auto text-center gap-12 dark:text-white md:text-xl font-mono">
          <button onClick={e => setActiveSection("thoughts")}>
            <p className={`highlight text-${activeSection === "thoughts" ? "green" : "white"}-400 cursor-pointer`}>
              THOUGHTS
            </p>
          </button>
          <button onClick={e => setActiveSection("projects")}>
            <p className={`highlight text-${activeSection === "projects" ? "green" : "white"}-400 cursor-pointer`}>
              PROJECTS
            </p>
          </button>
          <button onClick={e => setActiveSection("resume")}>
            <p className={`highlight text-${activeSection === "resume" ? "green" : "white"}-400 cursor-pointer`}>
              RESUME
            </p>
          </button>
        </div>

        {/* Content */}
        <div className="w-4/5 justify-center mx-auto pt-10">
          {
            activeSection === "thoughts" &&
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {Data.thoughts.map(t => {
                return (
                  <ArticleCard id={t.id} title={t.title} subtitle={t.subtitle} updated={t.updated} content={t.content}/>
                )
              })}
            </div>
          }

          {
            activeSection === "projects" &&
            <ProjectsList projects={Data.projects} />
          }

          { 
            activeSection === "resume" &&
            <div className="flex sm:justify-start justify-center w-full ">
              <a className="link darkTrans" href={Resume} target="_blank" rel="noopener noreferrer">PDF Resume</a>
            </div>
          }

        </div>
        
        {/* Calendly Embed */}
        <PopupWidget 
          text="Book a Meeting"
          url='https://calendly.com/camin-mccluskey/30min'
          className="darkTrans"
          color={darkMode ? "white" : "black"}
          textColor={darkMode ? "black" : "white"}
        />
      </div>
    </div>
  );
}

export default Home;
