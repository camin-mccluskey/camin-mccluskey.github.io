import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


const ArticleCard = ({title, subtitle, updated, content: {type, uri}}) => {
  return (
    // <div className="prose w-full max-w-none">
    //   {/* <ReactMarkdown className="dark:text-white darkTrans w-full text-center pb-10">
    //     Some of my writing is available on [Medium](https://medium.com/@caminmccluskey). You can check out what I'm reading [here](https://camin.xyz/reading-list). On this site are some random thoughts I've not fully written up, but which may be of interest anyway.
    //   </ReactMarkdown> */}
    //   <ReactMarkdown 
    //     remarkPlugins={[[remarkGfm]]}
    //     children={"hello"}
    //   />
    // </div>
    <div className="flex flex-col w-full md:min-h-full sm:min-h-250 bg-gray-300 dark:bg-gray-700 rounded-lg px-5 py-3 darkTrans shadow-sm">
      <div className="flex-grow h-full">
        <p className="text-2xl text-center dark:text-white darkTrans">{title}</p>
        <p className="py-3 text-gray-700 dark:text-gray-400 darkTrans">{subtitle}</p>
      </div>
      {type === "medium" && 
        <div className="flex justify-between items-end w-full dark:text-white">
          <p className="font-thin text-gray-800 dark:text-gray-400 darkTrans">{updated}</p>
          <div className="flex flex-col text-center">
            <a href={uri} className="text-2xl highlight"><FontAwesomeIcon icon={faMedium}/></a>
            <p className="text-xs dark:text-gray-400 darkTrans">Medium</p>
          </div>
        </div>
      }
    </div>
  )
}

export default ArticleCard;
