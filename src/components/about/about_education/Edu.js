import React from "react";
import ItemEdu from "./ItemEdu";
import { courses } from "../../../data";

const Edu = () => {
  return (
    <div className="about-edu">
      <h2 className="about-edu-title">Education</h2>
      {courses &&
        courses.map((course, index) => (
          <ItemEdu
            key={index}
            name={course.name}
            dateTime={course.dateTime}
            intro={course.intro}
            major1={course.major_1}
            major2={course.major_2 || ""}
            major3={course.major_3 || ""}
          />
        ))}
    </div>
  );
};

export default Edu;
