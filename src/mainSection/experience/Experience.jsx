import React from "react";
import ExperienceArticle from "./ExperienceArticle";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience sectionPage" id="EXPERIENCE">
      <h2 className="section-title">EXPERIENCE</h2>
      <ExperienceArticle
        title={"SENIOR DEVELOPER"}
        subTitle="INTELITEC SOLUTIONS"
        description={
          "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
        }
        date={"March 2013 - Present"}
      />
      <ExperienceArticle
        title={"SENIOR DEVELOPER"}
        subTitle="INTELITEC SOLUTIONS"
        description={
          "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
        }
        date={"March 2013 - Present"}
      />
      <ExperienceArticle
        title={"SENIOR DEVELOPER"}
        subTitle="INTELITEC SOLUTIONS"
        description={
          "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
        }
        date={"March 2013 - Present"}
      />
    </div>
  );
};

export default Experience;
