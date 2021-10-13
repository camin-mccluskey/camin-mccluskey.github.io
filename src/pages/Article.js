import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useParams } from "react-router";
import data from '../data';

const Article = () => {
  const { id } = useParams();
  const articleUri = data.thoughts.find(e => e.id === id).content.uri;

  const [content, setContent] = useState({md: ""})

  useEffect(()=> {
    fetch(articleUri)
      .then((res) => res.text())
      .then((md) => {
        console.log(md);
        setContent({ md })
      })
  }, [])
  
  return (
    <div className="prose w-full max-w-none">
      {/* <ReactMarkdown className="dark:text-white darkTrans w-full text-center pb-10">
        Some of my writing is available on [Medium](https://medium.com/@caminmccluskey). You can check out what I'm reading [here](https://camin.xyz/reading-list). On this site are some random thoughts I've not fully written up, but which may be of interest anyway.
      </ReactMarkdown> */}
      <ReactMarkdown 
        remarkPlugins={[[remarkGfm]]}
        children={content.md}
      />
    </div>
  )
}

export default Article;
