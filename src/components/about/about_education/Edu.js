import React from 'react';
import ItemEdu from './ItemEdu';
import { courses } from '../../../data';

const Edu = () => {
  return (
    <div className="about-edu">
      <h2 className="about-edu-title">Education</h2>
      {courses.map((course) => (
        <ItemEdu key={course.name} {...course} />
      ))}
    </div>
  );
};

export default Edu;
