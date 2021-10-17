import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useParams } from "react-router";
import data from '../data';
import Header from '../components/Header';
import CalendlyEmbed from '../components/CalendlyEmbed';

const Article = ({ darkMode, setDarkMode }) => {
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
    <div className="dark:bg-black bg-gray-100 min-w-screen min-h-screen darkTrans pt-8 pb-20">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="prose w-full max-w-none px-5">
        <ReactMarkdown 
          remarkPlugins={[[remarkGfm]]}
          children={content.md}
        />
      </div>
      {/* <CalendlyEmbed darkMode={darkMode} /> */}
    </div>
  )
}

export default Article;
