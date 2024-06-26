import React from 'react';
import { Container } from '@mui/material';
import { skills, tools } from '../../data';
import ItemSkill from './ItemSkill';
import './skill.scss';

const Skill = () => {
  return (
    <section id="skill" className="skill">
      <Container maxWidth="lg" sx={{ px: { xl: 0, xs: 2 } }}>
        <h1 className="section-title">
          Skill <span>sets</span>
        </h1>
        <div className="skill-list">
          {skills.map((skill) => (
            <ItemSkill key={skill.title} title={skill.title} image={skill.image} />
          ))}
        </div>
        <h1 className="section-title" style={{ paddingTop: 50 }}>
          <span>Some</span> tools
        </h1>
        <div className="skill-list">
          {tools.map((tool) => (
            <ItemSkill key={tool.title} title={tool.title} image={tool.image} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skill;
