import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useParams } from "react-router";
import data from '../data';
import Header from '../components/Header';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {coldarkCold, coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import ArticleMeta from '../components/ArticleMeta';
import Footer from '../components/Footer';
const defaultTheme = require('tailwindcss/defaultTheme')


const Article = ({ darkMode, setDarkMode }) => {
  const { id } = useParams();
  const { updated, tags, content: { uri }} = data.thoughts.find(e => e.id === id);

  const [content, setContent] = useState({md: ""})

  useEffect(() => {
    fetch(uri)
      .then((res) => res.text())
      .then((md) => {
        setContent({ md })
      })
  }, [])
  
  return (
    <div className="flex flex-col dark:bg-black bg-gray-100 min-w-screen min-h-screen darkTrans pt-8 pb-3">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="prose w-full flex-grow max-w-none px-5 py-10 dark:prose-dark">
        <ReactMarkdown 
          remarkPlugins={[[remarkGfm]]}
          children={content.md}
          linkTarget="_blank"
          components={{
            // assuming one title h1 tag - we can add the meta data here
            h1: ({node, ...props}) => <ArticleTitle updated={updated} tags={tags} {...props} />,
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
      <Footer />
    </div>
  )
}

const ArticleTitle = ({updated, tags, ...props}) => {
  return (
    <div>
      <h1 className="font-mono" {...props} />
      <ArticleMeta updated={updated} tags={tags} />
    </div>
  )
}

export default Article;
