import DarkModeToggle from './DarkModeToggle';
import SocialLinks from './SocialLinks';


const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Title */}
      <div className="flex justify-center">
          <a href="/">
        <div className="flex text-3xl md:text-5xl text-center dark:text-white darkTrans font-mono">
            <p className="pr-2">{'>'}</p>
            <p className="h-full pb-1.5 pr-0.5 overflow-x-hidden overflow-y-visible border-r-4 tracking-tight whitespace-nowrap animate-typing dark:animate-dark-typing">
              camin-mccluskey
            </p>
        </div>
          </a>
      </div>
      <SocialLinks />
  </div>
  )
}

export default Header;
