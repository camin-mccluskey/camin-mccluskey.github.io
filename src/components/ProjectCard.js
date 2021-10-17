import { imgUrl, imgMap } from '../assets/imgs/imgmap';


const ProjectCard = ({ project }) => {
  const { title, description, content: { badges, uri } } = project;

  // badges from - https://devicon.dev/
  return (
    <a href={uri} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-col w-full md:min-h-full sm:min-h-250 bg-gray-200 dark:bg-gray-900 rounded-lg px-5 py-3 
                    shadow-sm hover:shadow-lg dark:shadow-dark-sm dark:hover:shadow-dark-lg
                    cursor-pointer 
                    transition-all ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="flex-grow h-full">
        <p className="text-2xl text-center dark:text-white darkTrans font-mono">{title}</p>
        <p className="py-3 text-gray-700 dark:text-gray-400 darkTrans font-thin text-lg">{description}</p>
      </div>
      <div className="flex justify-evenly items-end space-x-3 space-y-3 flex-wrap dark:text-white">
        {badges.map(b => {
          const src = `${imgUrl}${imgMap[b]}`;
          return <img width={50} height={50} src={src} />
        })}
     </div>
    </div>
    </a>
  )
}

export default ProjectCard;
