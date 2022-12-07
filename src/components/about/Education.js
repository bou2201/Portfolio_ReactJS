import React from "react";

function Education(props) {
  return (
    <div className="about-edu-item">
      <div className="about-edu-item-course">
        <h3>{props.name}</h3>
        <span>{props.time}</span>
      </div>
      <p className="about-edu-item-intro">{props.intro}</p>
      <ul className="about-edu-item-major">
        {props.major1 && <li>{props.major1}</li>}
        {props.major2 && <li>{props.major2}</li>}
        {props.major3 && <li>{props.major3}</li>}
      </ul>
    </div>
  );
}

export default Education;
