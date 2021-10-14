import Project from "./Project";

const ProjectsList = ({ projects }) => {
  return (
    <div className="w-full grid-cols-1 space-y-7">
      {projects.map(p =>
        <Project project={p}/>
      )}
    </div>
  )
}

export default ProjectsList;
