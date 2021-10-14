import Project from "./Project";

const ProjectsList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {projects.map(p =>
        <Project project={p}/>
      )}
    </div>
  )
}

export default ProjectsList;
