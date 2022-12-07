import React from "react";
import { Link } from "react-scroll";
import { Tooltip } from "@mui/material";

const NavbarItem = (props) => {
  return (
    <Link className="navbar-item" activeClass="active" spy to={props.id}>
      <Tooltip title={props.title} placement="top">
        {props.children}
      </Tooltip>
    </Link>
  );
};

export default NavbarItem;
