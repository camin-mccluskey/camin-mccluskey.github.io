import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


const ArticleCard = ({title, subtitle, content: {type, uri}}) => {
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
    <div className="w-full sm:min-h-screen bg-gray-200 dark:bg-gray-700 rounded-lg px-5 py-3 darkTrans">
      <p className="text-2xl text-center dark:text-white">{title}</p>
      <p className="pt-3 text-gray-700 dark:text-gray-400">{subtitle}</p>
      {type === "medium" && 
        <div className="flex justify-end w-full pt-5">
          <div className="flex flex-col text-center">
            <a href={uri} className="text-2xl highlight"><FontAwesomeIcon icon={faMedium}/></a>
            <p className="text-xs">Medium.com</p>
        </div>
        </div>
      }
    </div>
  )
}

export default ArticleCard;
