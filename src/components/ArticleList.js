import ArticleItem from "./ArticleItem"

const ArticleList = ({ articles }) => {
  return (
    <div className="w-full grid-cols-1 space-y-7">
      {articles.map(t => {
        return (
          <ArticleItem id={t.id} title={t.title} subtitle={t.subtitle} updated={t.updated} content={t.content}/>
        )
      })}
    </div>
  )
}

export default ArticleList;
