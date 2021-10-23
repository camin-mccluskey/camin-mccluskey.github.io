import { useTrail, animated } from 'react-spring';

const SECTIONS = [
  "thoughts",
  "projects",
  "resume",
];

const SectionsList = ({ activeSection, setActiveSection }) => {
  const trail = useTrail(SECTIONS.length, {
    config: { mass: 10, tension: 1500, friction: 400 },
    from: { opacity: 0 },
    to: { opacity: 1},
    delay: 1000,
  });

  return (
    <div className="grid grid-cols-3 w-4/5 mx-auto text-center gap-12 dark:text-white md:text-2xl font-mono">
      {trail.map((style, idx) => (
        <animated.div style={style}>
          <SectionHeading sectionId={idx} activeSection={activeSection} setActiveSection={setActiveSection} />
        </animated.div>
      ))}
    </div>
  )
}

const SectionHeading = ({ sectionId, activeSection, setActiveSection }) => {
  const section = SECTIONS[sectionId];
  const getClass = (section) => `highlight cursor-pointer underline text-${activeSection === section ? "purple" : "white"}-600 dark:text-${activeSection === section ? "green" : "white"}-400`
  return (
    <button onClick={e => setActiveSection(section)}>
      <p className={getClass(section)}>
        { section.toUpperCase() }
      </p>
    </button>
  )
}

export default SectionsList;
