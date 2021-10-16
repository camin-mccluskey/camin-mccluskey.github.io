import { useState } from 'react';
import useDarkMode from '../utils/useDarkMode';
import Resume from '../content/resume/resume.pdf';
import Data from '../data';
import ProjectGrid from '../components/ProjectGrid';
import ArticleList from '../components/ArticleList';
import DarkModeToggle from '../components/DarkModeToggle';
import Header from '../components/Header';
import CalendlyEmbed from '../components/CalendlyEmbed';


function Home() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [activeSection, setActiveSection] = useState("thoughts");

  return (
    <div className="dark:bg-black bg-gray-100 min-w-screen min-h-screen darkTrans pb-20">
      <div className="flex flex-col justify-center w-full pt-10 relative">
        { /* Header */ }
        <Header />

        {/* Dark mode toggle */}
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Bio */}
        <div className="flex justify-center sm:py-5 md:py-10">
          <p className="dark:text-white w-4/5 darkTrans font-mono">
            I'm an entrepreneur currently building something new at <a className="link" target="_blank" rel="noopener noreferrer" href="https://joinef.com">Entrepreneur First</a>. Before that I was a full stack software engineer at Skyscanner, a data analyst at Amazon and worked at some interesting startups. I am also the co-founder of an app for housemates - <a className="link" target="_blank" rel="noopener noreferrer" href="https://inhouseapp.io">inHouse</a>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-4/5 h-px dark:bg-gray-200 darkTrans bg-gray-800 self-center my-5"/>

        {/* Section Headings */}
        <div className="grid grid-cols-3 w-4/5 mx-auto text-center gap-12 dark:text-white md:text-2xl font-mono">
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
            <ArticleList articles={Data.thoughts} />
          }

          {
            activeSection === "projects" &&
            <ProjectGrid projects={Data.projects} />
          }

          { 
            activeSection === "resume" &&
            <div className="flex sm:justify-start justify-center w-full ">
              <a className="link darkTrans" href={Resume} target="_blank" rel="noopener noreferrer">PDF Resume</a>
            </div>
          }

        </div>
        
        {/* Calendly Embed */}
        <CalendlyEmbed darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Home;
