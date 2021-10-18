const SectionsList = ({ activeSection, setActiveSection }) => {
  const getClass = (sectionName) => `highlight cursor-pointer underline text-${activeSection === sectionName ? "purple" : "white"}-600 dark:text-${activeSection === sectionName ? "green" : "white"}-400`
  return (
    <div className="grid grid-cols-3 w-4/5 mx-auto text-center gap-12 dark:text-white md:text-2xl font-mono">
      <button onClick={e => setActiveSection("thoughts")}>
        <p className={getClass("thoughts")}>
          THOUGHTS
        </p>
      </button>
      <button onClick={e => setActiveSection("projects")}>
        <p className={getClass("projects")}>
          PROJECTS
        </p>
      </button>
      <button onClick={e => setActiveSection("resume")}>
        <p className={getClass("resume")}>
          RESUME
        </p>
      </button>
    </div>
  )
}

export default SectionsList;
