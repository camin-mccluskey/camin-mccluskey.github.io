import ArticleItem from "./ArticleItem"
import { animated } from 'react-spring';
import useDefaultTrail from '../utils/useDefaultTrail';


const ArticleList = ({ articles }) => {
  const trail = useDefaultTrail(articles, 100);

  return (
    <div className="w-full grid-cols-1 divide-y divide-black dark:divide-white space-y-7">
      {trail.map((style, idx) => {
        const { id, title, subtitle, updated, tags, content } = articles[idx];
        return (
          <animated.div style={style}>
            <ArticleItem id={id} title={title} subtitle={subtitle} updated={updated} tags={tags} content={content} key={idx}/>
          </animated.div>
        )
      })}
    </div>
  )
}

export default ArticleList;
