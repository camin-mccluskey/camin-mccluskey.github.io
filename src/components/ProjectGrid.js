import { animated } from "@react-spring/web";
import useDefaultTrail from "../utils/useDefaultTrail";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
  const trail = useDefaultTrail(projects, 100);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {trail.map((style, idx) => (
        <animated.div style={style}>
          <ProjectCard project={projects[idx]} key={idx}/>
        </animated.div>
      ))}
    </div>
  )
}

export default ProjectGrid;
