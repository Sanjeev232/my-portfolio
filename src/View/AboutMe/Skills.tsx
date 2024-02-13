import React, { useCallback } from "react";
import { SKILLS, BACKEND_SKILLS } from "../../Utils/constant";

interface SkillCategoryProps {
  title: string;
  items: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, items }) => {
  return (
    <div>
      <strong>{title}:</strong>
      <ul className="skills">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const {
    frontEnd: { programmingLang, markUpLang, stylingLang, library },
    deployment,
    analyticsTools,
    backend,
  } = SKILLS;

  return (
    <>
      <p className="paragraph gutter-paragraph">
        Here are a few technologies I’ve been working with recently:
      </p>
      <div className="skill-list">
        <SkillCategory title="Coding Languages" items={programmingLang} />
        <SkillCategory title="Markup Languages" items={markUpLang} />
        <SkillCategory title="Styling Languages" items={stylingLang} />
        <SkillCategory title="Libraries & CMA" items={library} />
        {BACKEND_SKILLS && <SkillCategory title="Backend" items={backend} />}
        <SkillCategory title="Analytics Tools" items={analyticsTools} />
        <SkillCategory title="Deployment" items={deployment} />
      </div>
    </>
  );
};

export default Skills;
