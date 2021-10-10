import { useState, useEffect } from 'react';
import useDarkMode from './utils/useDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import EXAMPLE from './posts/example.md';
import './App.scss';


function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [activeSection, setActiveSection] = useState(null);
  const [content, setContent] = useState({md: ""});

  useEffect(()=> {
    fetch(EXAMPLE)
      .then((res) => res.text())
      .then((md) => {
        console.log(md);
        setContent({ md })
      })
  }, [])

  return (
    <div className="dark:bg-black bg-white w-screen h-screen darkTrans">
      <div className="flex flex-col justify-center w-full">
        {/* Dark mode toggle */}
        <div className="flex justify-end p-2">
          <input id="toggle" class="toggle" type="checkbox" value={darkMode} onChange={e => setDarkMode(!darkMode)}/>
        </div>

        {/* Title */}
        <p className="text-3xl md:text-5xl text-center dark:text-white darkTrans">Camin McCluskey</p>

        {/* Social Links */}
        <div className="flex space-x-5 md:space-x-10 justify-center pt-2 dark:text-white text-xl md:text-3xl">
          <a href="https://twitter.com/Camin_McCluskey"><FontAwesomeIcon icon={faTwitter} className="highlight"/></a>
          <a href="https://medium.com/@caminmccluskey"><FontAwesomeIcon icon={faMedium} className="highlight" /></a>
          <a href="https://www.linkedin.com/in/camin-mccluskey"><FontAwesomeIcon icon={faLinkedin} className="highlight" /></a>
          <a href="https://github.com/camin-mccluskey"><FontAwesomeIcon icon={faGithub} className="highlight" /></a>
        </div>

        {/* Bio */}
        <div className="flex justify-center py-5">
          <p className="dark:text-white darkTrans w-4/5">
          I'm an entreprenuer currently building something new at Entreprenuer First. Before that I was a full stack software engineer at Skyscanner. I am also the co-founder of an app for housemates - <a className="link" href="https://inhouseapp.io">inHouse</a>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-4/5 h-px dark:bg-gray-200 darkTrans bg-gray-800 self-center my-5"/>

        {/* Section Headings */}
        <div className="flex w-4/5 mx-auto justify-evenly text-center space-x-5 dark:text-white">
          <a onClick={e => setActiveSection("thoughts")}>
            <p className={`highlight text-${activeSection === "thoughts" ? "green" : "white"}-500`}>
              THOUGHTS
            </p>
          </a>
          <a onClick={e => setActiveSection("resume")}>
            <p className={`highlight text-${activeSection === "resume" ? "green" : "white"}-500`}>
              RESUME
            </p>
          </a>
          <a onClick={e => setActiveSection("projects")}>
            <p className={`highlight text-${activeSection === "projects" ? "green" : "white"}-500`}>
              PROJECTS
            </p>
          </a>
        </div>

        {/* Content */}
        <div className="w-4/5 justify-center mx-auto pt-10">
          {
            activeSection === "thoughts" &&
            <ReactMarkdown 
            remarkPlugins={[[remarkGfm]]}
            className="prose w-full max-w-none"
            children={content.md}
            />
          }

        </div>
      </div>
    </div>
  );
}

export default App;
