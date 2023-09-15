import { useState } from "react";
import SectionsList from "./SectionsList";
import ProjectGrid from "./ProjectGrid";
import ArticleList from "./ArticleList";

const Content = ({ data }) => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <>
      <SectionsList
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="w-4/5 justify-center mx-auto pt-10">
        {activeSection === "writing" && (
          <ArticleList articles={data.thoughts} />
        )}

        {activeSection === "projects" && (
          <ProjectGrid projects={data.projects} />
        )}
      </div>
    </>
  );
};

export default Content;
