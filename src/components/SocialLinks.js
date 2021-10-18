import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const SocialLinks = () => {
  return (
    <div className="flex space-x-5 md:space-x-10 justify-center md:pt-1 dark:text-white text-2xl md:text-3xl">
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
  )
}

export default SocialLinks;
