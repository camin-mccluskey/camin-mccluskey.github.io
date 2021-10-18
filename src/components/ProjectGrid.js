import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {projects.map((p, idx) =>
        <ProjectCard project={p} key={idx}/>
      )}
    </div>
  )
}

export default ProjectGrid;
