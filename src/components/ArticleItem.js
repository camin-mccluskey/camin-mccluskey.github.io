import {
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


const ArticleItem = ({id, title, subtitle, updated, tags, content: {type, uri}}) => {
  const isMedium = type === "medium";
  
  // const logo = isMedium ? (
  //   <div className="flex justify-between items-end w-full dark:text-white">
  //     <p className="font-thin text-gray-800 dark:text-gray-400 darkTrans">{updated}</p>
  //     <div className="flex flex-col text-center">
  //       <p className="text-2xl darkTrans"><FontAwesomeIcon icon={faMedium}/></p>
  //       <p className="text-xs dark:text-gray-400 darkTrans">Medium</p>
  //     </div>
  //   </div>
  // ) : null;

  const innerContent = (
    <div className="bg-gray-300 dark:bg-gray-700 rounded-lg 
    shadow-sm hover:shadow-lg dark:shadow-dark-sm dark:hover:shadow-dark-lg 
    cursor-pointer
    p-3 flex justify-between
    transition-all ease-in-out duration-300 transform  hover:scale-110"
    >
      <div className="w-4/5">
        <p className="text-2xl dark:text-white darkTrans">{title}</p>
        <p className="py-3 text-gray-700 dark:text-gray-400 darkTrans">{subtitle}</p>
      </div>
    </div>
  )

  const content = isMedium ? <a href={uri} target="_blank">{innerContent}</a> : <Link to={`/thoughts/${id}`}>{innerContent}</Link>
  

  return (
    // <>
    // {content}
    // </>
    <div>
      <div className="flex font-thin text-gray-800 dark:text-gray-400 ">
        <p className="darkTrans pr-2">{updated}</p>
        { tags.length > 0 && <p className="darkTrans"> - {tags.join(', ')}</p> }
      </div>
      <p className="text-2xl dark:text-white darkTrans font-mono">{title}</p>
      <p className="py-3 text-gray-700 dark:text-gray-400 darkTrans font-thin text-lg">{subtitle}</p>
    </div>
  )
}

export default ArticleItem;
