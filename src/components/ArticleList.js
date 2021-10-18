import ArticleItem from "./ArticleItem"

const ArticleList = ({ articles }) => {
  return (
    <div className="w-full grid-cols-1 divide-y divide-black dark:divide-white space-y-7">
      {articles.map((t, idx) => {
        return (
          <ArticleItem id={t.id} title={t.title} subtitle={t.subtitle} updated={t.updated} tags={t.tags} content={t.content} key={idx}/>
        )
      })}
    </div>
  )
}

export default ArticleList;
