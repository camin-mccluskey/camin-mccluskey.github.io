import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-center">
        <div className="flex text-3xl md:text-5xl text-center dark:text-white darkTrans font-mono">
          <p className="pr-2">{'>'}</p>
          <p className="h-full pb-1.5 pr-0.5 overflow-x-hidden overflow-y-visible border-r-4 tracking-tight whitespace-nowrap animate-typing">camin-mccluskey</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex space-x-5 md:space-x-10 justify-center md:pt-1 dark:text-white text-xl md:text-3xl">
        <a href="https://twitter.com/Camin_McCluskey" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="highlight"/>
        </a>
        <a href="https://medium.com/@caminmccluskey" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} className="highlight" />
        </a>
        <a href="https://www.linkedin.com/in/camin-mccluskey" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="highlight" />
        </a>
        <a href="https://github.com/camin-mccluskey" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="highlight" />
        </a>
      </div>
  </div>
  )
}

export default Header;
