import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useParams } from "react-router";
import data from '../data';
import Header from '../components/Header';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {coldarkCold, coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
const defaultTheme = require('tailwindcss/defaultTheme')


const Article = ({ darkMode, setDarkMode }) => {
  const { id } = useParams();
  const article = data.thoughts.find(e => e.id === id);

  const [content, setContent] = useState({md: ""})

  useEffect(()=> {
    fetch(article.content.uri)
      .then((res) => res.text())
      .then((md) => {
        console.log(md);
        setContent({ md })
      })
  }, [])
  
  return (
    <div className="dark:bg-black bg-gray-100 min-w-screen min-h-screen darkTrans pt-8 pb-20">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="prose w-full max-w-none px-5 pt-5 dark:prose-dark">
        <ReactMarkdown 
          remarkPlugins={[[remarkGfm]]}
          children={content.md}
          components={{
            // assuming one title h1 tag - we can add the meta data here
            h1: ({node, ...props}) => <h1 className="font-mono" {...props} />,
            h2: ({node, ...props}) => <h2 className="font-mono underline" {...props} />,
            h3: ({node, ...props}) => <h3 className="font-mono underline" {...props} />,
            h4: ({node, ...props}) => <h4 className="font-mono underline" {...props} />,
            p: ({node, ...props}) => <p className="font-mono" {...props} />,
            li: ({node, ...props}) => <li className="font-mono" {...props} />,
            a: ({node, ...props}) => <a className="font-mono" {...props} />,
            code: ({node, inline, className, children, ...props}) => {
              const match = /language-(\w+)/.exec(className || '')
              const bgColor = darkMode ? defaultTheme.colors.gray[900] : defaultTheme.colors.gray[200];
              return !inline && match ? (
                <SyntaxHighlighter
                  className="darkTrans"
                  children={String(children).replace(/\n$/, '')}
                  style={darkMode ? coldarkDark : coldarkCold}
                  language={match[1]}
                  customStyle={{background: bgColor}}
                  {...props}
                />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
          }}
        />
      </div>
    </div>
  )
}



export default Article;
