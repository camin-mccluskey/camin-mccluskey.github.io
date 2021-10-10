import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import useDarkMode from './utils/useDarkMode';


function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
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
          I'm an entreprenuer currently building something new at Entreprenuer First. Before that I was a full stack software engineer at Skyscanner. I am also the co-founder of an app for housemates - <a href="https://inhouseapp.io">inHouse</a>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-4/5 h-px dark:bg-gray-200 darkTrans bg-gray-800 self-center my-5"/>

        {/* Section Headings */}
        <div className="flex w-4/5 mx-auto justify-evenly text-center space-x-5 dark:text-white">
          <p className="highlight">
            THOUGHTS
          </p>
          <p className="highlight">
            RESUME
          </p>
          <p className="highlight">
            PROJECTS
          </p>
        </div>

        {/* Content */}
        <div>
          <p>Hello World</p>
        </div>
      </div>
    </div>
  );
}

export default App;
