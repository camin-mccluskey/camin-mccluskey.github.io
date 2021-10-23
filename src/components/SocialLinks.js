import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { animated } from 'react-spring';
import useDefaultTrail from '../utils/useDefaultTrail';


const LINKS = [
  {href: "https://twitter.com/Camin_McCluskey", icon: faTwitter, label: "twitter link"},
  {href: "https://medium.com/@caminmccluskey", icon: faMedium, label: "medium link"},
  {href: "https://www.linkedin.com/in/camin-mccluskey", icon: faLinkedin, label: "linkedin link"},
  {href: "https://github.com/camin-mccluskey", icon: faGithub, label: "medium link"},
];


const SocialLinks = () => {
  const trail = useDefaultTrail(LINKS, 500);

  return (
    <div className="flex space-x-5 md:space-x-10 justify-center md:pt-1 dark:text-white text-2xl md:text-3xl">
      {trail.map((style, idx) => {
        const { href, icon, label } = LINKS[idx];
        return (
          <animated.div style={style}>
            <SocialLink href={href} icon={icon} label={label} />
          </animated.div>
        )
      })}
  </div>
  )
}

const SocialLink = ({ href, icon, label}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <FontAwesomeIcon icon={icon} className="highlight"/>
    </a>
  )
}

export default SocialLinks;
