import {
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import ArticleMeta from "./ArticleMeta";


const ArticleItem = ({id, title, subtitle, updated, tags, content: {type, uri}}) => {
  const isMedium = type === "medium";

  const logo = isMedium ? (
    <p className="text-md darkTrans dark:text-white pl-3">
      <FontAwesomeIcon icon={faMedium}/>
    </p>
    ) : null;

  const plainTitle = <p className="text-2xl dark:text-white darkTrans font-mono hover-hover:underline max-w-max">{title}</p>
  const linkTitle = isMedium ? 
    <a href={uri} target="_blank" rel="noreferrer" >{plainTitle}</a> 
    : 
    <Link to={`/thoughts/${id}`}>{plainTitle}</Link>
  

  return (
    <div className="py-3">
      <ArticleMeta updated={updated} tags={tags} />
      <div className="flex sm:items-start md:items-center">
        {linkTitle}
        {logo}
      </div>
      <p className="py-3 text-gray-700 dark:text-gray-400 darkTrans text-xl">{subtitle}</p>
    </div>
  )
}

export default ArticleItem;
