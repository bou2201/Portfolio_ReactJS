import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Socials = () => {
  return (
    <div className="contact-socials">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/bou2201/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon></FacebookIcon>
          </a>
        </li>
        <li>
          <a
            href="mailto:lamchuc123456@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon></EmailIcon>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bouu_2201/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon></InstagramIcon>
          </a>
        </li>
        <li>
          <a href="https://github.com/bou2201" target="_blank" rel="noreferrer">
            <GitHubIcon></GitHubIcon>
          </a>
        </li>
      </ul>
      <div className="contact-socials-line"></div>
    </div>
  );
};

export default Socials;
