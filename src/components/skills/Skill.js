import React from "react";
import { Container } from "@mui/material";
import { skills } from "./data/SkillData";
import { tools } from "./data/ToolData";
import ItemSkill from "./ItemSkill";
import "./skill.scss";

const Skill = () => {
  return (
    <section id="skill" className="skill">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="section-title">
          Skill <span>sets</span>
        </h1>
        <div className="skill-list">
          {skills &&
            skills.map((skill, index) => (
              <ItemSkill key={index} title={skill.title} image={skill.image} />
            ))}
        </div>
        <h1 className="section-title" style={{paddingTop: 50}}>
          <span>Some</span> tools
        </h1>
        <div className="skill-list">
          {tools &&
            tools.map((tool, index) => (
              <ItemSkill key={index} title={tool.title} image={tool.image} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Skill;
