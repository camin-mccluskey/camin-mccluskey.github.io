import { useState, useEffect } from 'react';
import useDarkMode from './utils/useDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import EXAMPLE from './posts/example.md';
import Resume from './resume/resume.pdf';
import { PopupWidget } from "react-calendly";
import Data from './data';
import './App.scss';
import ArticleCard from './components/ArticleCard';


function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [activeSection, setActiveSection] = useState(null);
  
  const [content, setContent] = useState({md: ""})

  // https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all 
  // fetch all posts in a controlled way
  useEffect(()=> {
    fetch(EXAMPLE)
      .then((res) => res.text())
      .then((md) => {
        console.log(md);
        setContent({ md })
      })
  }, [])

  return (
    <div className="dark:bg-black bg-white min-w-screen min-h-screen darkTrans">
      <div className="flex flex-col justify-center w-full">
        {/* Dark mode toggle */}
        <div className="flex justify-end transform md:-translate-x-4 md:translate-y-4 p-2 md:p-0">
          <input id="toggle" class="toggle" type="checkbox" value={darkMode} onChange={e => setDarkMode(!darkMode)}/>
        </div>

        {/* Title */}
        <p className="text-3xl md:text-5xl text-center dark:text-white darkTrans font-mono">Camin McCluskey</p>

        {/* Social Links */}
        <div className="flex space-x-5 md:space-x-10 justify-center pt-2 md:pt-5 dark:text-white text-xl md:text-3xl">
          <a href="https://twitter.com/Camin_McCluskey"><FontAwesomeIcon icon={faTwitter} className="highlight"/></a>
          <a href="https://medium.com/@caminmccluskey"><FontAwesomeIcon icon={faMedium} className="highlight" /></a>
          <a href="https://www.linkedin.com/in/camin-mccluskey"><FontAwesomeIcon icon={faLinkedin} className="highlight" /></a>
          <a href="https://github.com/camin-mccluskey"><FontAwesomeIcon icon={faGithub} className="highlight" /></a>
        </div>

        {/* Bio */}
        <div className="flex justify-center py-5">
          <p className="dark:text-white darkTrans w-4/5">
          I'm an entrepreneur currently building something new at <a className="link" target="_blank" rel="noopener noreferrer" href="https://joinef.com">Entrepreneur First</a>. Before that I was a full stack software engineer at Skyscanner, a data analyst at Amazon and worked at some interesting startups. I am also the co-founder of an app for housemates - <a className="link" target="_blank" rel="noopener noreferrer" href="https://inhouseapp.io">inHouse</a>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-4/5 h-px dark:bg-gray-200 darkTrans bg-gray-800 self-center my-5"/>

        {/* Section Headings */}
        <div className="flex w-4/5 mx-auto justify-evenly text-center space-x-5 dark:text-white">
          <button onClick={e => setActiveSection("thoughts")}>
            <p className={`highlight text-${activeSection === "thoughts" ? "green" : "white"}-500`}>
              THOUGHTS
            </p>
          </button>
          <button onClick={e => setActiveSection("projects")}>
            <p className={`highlight text-${activeSection === "projects" ? "green" : "white"}-500`}>
              PROJECTS
            </p>
          </button>
          <button onClick={e => setActiveSection("resume")}>
            <p className={`highlight text-${activeSection === "resume" ? "green" : "white"}-500`}>
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
                  <ArticleCard title={t.title} subtitle={t.subtitle} content={t.content}/>
                )
              })}
            </div>
          }

          {
            activeSection === "projects" &&
            <p>Some things around projects I've done</p>
          }

          { 
            activeSection === "resume" &&
            <a className="dark:text-white darkTrans link" href={Resume} target="_blank" rel="noopener noreferrer">PDF Resume</a>
          }

        </div>
        
        {/* Calendly Embed */}
        <PopupWidget 
          text="Let's Chat"
          url='https://calendly.com/camin-mccluskey/30min'
          className="darkTrans"
          color={darkMode ? "white" : "black"}
          textColor={darkMode ? "black" : "white"}
        />
      </div>
    </div>
  );
}

export default App;
