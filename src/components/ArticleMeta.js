import React from 'react'

export default function ArticleMeta({updated, tags}) {
  return (
    <div className="flex max-h-full text-purple-600 dark:text-green-400 pb-1 articleMeta">
      <p className="darkTrans pr-1" id="metaItem">{updated}</p>
      { tags.length > 0 && <p className="darkTrans" id="metaItem"> -- {tags.join(', ')}</p> }
    </div>
  )
}
