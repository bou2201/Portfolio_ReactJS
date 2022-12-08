import { Tooltip } from "@mui/material";
import React from "react";

const ItemSkill = (props) => {
  return (
    <div className="skill-list-item">
      <Tooltip title={props.title}>
        <img src={props.image} alt={props.title} />
      </Tooltip>
    </div>
  );
};

export default ItemSkill;
