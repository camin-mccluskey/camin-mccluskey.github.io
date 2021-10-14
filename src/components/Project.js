const Project = ({ project }) => {
  return (
    <div className="bg-gray-400 rounded-md dark:text-white ">
        <p>{project.title}</p>
        <p className="text-gray-800 dark:text-gray-400">{project.description}</p>
    </div>
  )
}

export default Project;
