import { useState } from 'react';
import SectionsList from './SectionsList';
import ProjectGrid from './ProjectGrid';
import ArticleList from './ArticleList';
import Resume from '../content/resume/resume.pdf';


const Content = ({ data }) => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <>
    <SectionsList activeSection={activeSection} setActiveSection={setActiveSection}/>
    <div className="w-4/5 justify-center mx-auto pt-10">
      {
        activeSection === "thoughts" &&
        <ArticleList articles={data.thoughts} />
      }

      {
        activeSection === "projects" &&
        <ProjectGrid projects={data.projects} />
      }

      { 
        activeSection === "resume" &&
        <div className="flex sm:justify-start justify-center w-full ">
          <a className="link darkTrans" href={Resume} target="_blank" rel="noopener noreferrer">PDF Resume</a>
        </div>
      }
    </div>
    </>
  )
}

export default Content;
