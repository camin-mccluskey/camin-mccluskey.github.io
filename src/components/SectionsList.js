import { animated } from "react-spring";
import useDefaultTrail from "../utils/useDefaultTrail";

const SECTIONS = ["digital garden", "projects", "writing"];

const SectionsList = ({ activeSection, setActiveSection }) => {
  const trail = useDefaultTrail(SECTIONS, 1000);

  return (
    <div className="grid grid-cols-3 w-4/5 mx-auto text-center gap-12 dark:text-white md:text-2xl font-mono">
      {trail.map((style, idx) => (
        <animated.div style={style}>
          <SectionHeading
            sectionId={idx}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </animated.div>
      ))}
    </div>
  );
};

const SectionHeading = ({ sectionId, activeSection, setActiveSection }) => {
  const section = SECTIONS[sectionId];
  const getClass = (section) =>
    `highlight cursor-pointer underline text-${
      activeSection === section ? "purple" : "white"
    }-600 dark:text-${activeSection === section ? "green" : "white"}-400`;
  return section === "digital garden" ? (
    <a href="https://blog.camin.xyz" className={getClass(section)}>
      DIGITAL GARDEN
    </a>
  ) : (
    <button onClick={(e) => setActiveSection(section)}>
      <p className={getClass(section)}>{section.toUpperCase()}</p>
    </button>
  );
};

export default SectionsList;
