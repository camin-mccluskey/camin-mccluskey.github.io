import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import useDarkMode from './utils/useDarkMode';


function App() {
  const [darkMode, setDarkMode] = useDarkMode(false)
  return (
    // <div className={`bg-${darkMode ? "black" : "white"} w-screen h-screen transistion transition-colors duration-500 ease-in-out`}>
    <div className={`dark dark:bg-black bg-white w-screen h-screen transistion transition-colors duration-500 ease-in-out`}>
      <div className="flex flex-col justify-center w-full">
        <div className="flex justify-end p-2">
          <input id="toggle" class="toggle" type="checkbox" value={darkMode} onChange={e => setDarkMode(!darkMode)}/>
        </div>
        <p className="text-3xl text-center">Camin McCluskey</p>
        <div className="flex space-x-5 justify-center pt-2">
          <a href="https://twitter.com/Camin_McCluskey"><FontAwesomeIcon icon={faTwitter}/></a>
          <a href="https://medium.com/@caminmccluskey"><FontAwesomeIcon icon={faMedium}/></a>
          <a href="https://www.linkedin.com/in/camin-mccluskey"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href=""><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        <div className="py-5 px-2">
          <p>
          I'm an entreprenuer currently building something new at Entreprenuer First. Before that I was a full stack software engineer at Skyscanner. I am also the co-founder of an app for housemates - inHouse.
          </p>
        </div>
        <div className="w-4/5 h-px bg-gray-800 self-center my-5"/>
      </div>
    </div>
  );
}

export default App;
