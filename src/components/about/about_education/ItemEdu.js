import React from "react";

const ItemEdu = (props) => {
  return (
    <div className="about-edu-item">
      <div className="about-edu-item-course">
        <h3>{props.name}</h3>
        <span>{props.dateTime}</span>
      </div>
      <p className="about-edu-item-intro">{props.intro}</p>
      <ul className="about-edu-item-major">
        {props.major_1 && <li>{props.major_1}</li>}
        {props.major_2 && <li>{props.major_2}</li>}
        {props.major_3 && <li>{props.major_3}</li>}
      </ul>
    </div>
  );
}

export default ItemEdu;
