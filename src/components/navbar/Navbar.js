import React from "react";
import HouseIcon from "@mui/icons-material/House";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ModeIcon from "@mui/icons-material/Mode";
import CallIcon from "@mui/icons-material/Call";
import "./navbar.scss";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <NavbarItem id="intro" title="Introduction">
        <HouseIcon />
      </NavbarItem>
      <NavbarItem id="about" title="About">
        <SwitchAccountIcon />
      </NavbarItem>
      <NavbarItem id="project" title="Project">
        <AssignmentIcon />
      </NavbarItem>
      <NavbarItem id="skill" title="Skills">
        <ModeIcon />
      </NavbarItem>
      <NavbarItem id="contact" title="Contact">
        <CallIcon />
      </NavbarItem>
    </nav>
  );
};

export default Navbar;
