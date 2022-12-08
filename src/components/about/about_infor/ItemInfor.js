import React from "react";

const ItemInfor = (props) => {
  return (
    <div className="about-info-inner">
      <p>{props.title}:</p>
      {!props.href ? (
        <span>{props.explain}</span>
      ) : (
        <a href={props.href} target="_blank" rel="noreferrer">
          {props.explain}
        </a>
      )}
    </div>
  );
};

export default ItemInfor;
