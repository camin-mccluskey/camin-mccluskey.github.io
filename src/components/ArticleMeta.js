import React from 'react'

export default function ArticleMeta({updated, tags}) {
  return (
    <div className="flex max-h-full font-thin text-gray-800 dark:text-green-400 pb-1">
      <p className="darkTrans articleMeta pr-1">{updated}</p>
      { tags.length > 0 && <p className="darkTrans articleMeta"> -- {tags.join(', ')}</p> }
    </div>
  )
}
