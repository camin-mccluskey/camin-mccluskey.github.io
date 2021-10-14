import { imgUrl, imgMap } from '../assets/imgs/imgmap';

const Project = ({ project }) => {
  const { title, description, content: { badges, uri } } = project;
  // badges from - https://devicon.dev/
  return (
    <div className="bg-gray-300 dark:bg-gray-700 rounded-lg 
                    shadow-sm hover:shadow-lg dark:shadow-dark-sm dark:hover:shadow-dark-lg 
                    cursor-pointer
                    p-3 flex justify-between
                    transition-all ease-in-out duration-300 transform  hover:scale-110"
    >
        <div className="w-4/5">
          <p className="text-2xl dark:text-white darkTrans">{title}</p>
          <p className="py-3 text-gray-700 dark:text-gray-400 darkTrans">{description}</p>
        </div>
        <div className="flex items-center w-1/5 justify-around">
          {badges.map(b => {
            const badgeUrl = `${imgUrl}${imgMap[b]}`;
            return (
              <div clasName="h-30 w-30">
                <img width={30} height={30} src={badgeUrl}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Project;
