import React from "react";
import Avatar from "../../assets/avatar-about.jpg";

const Information = () => {
  return (
    <div className="about-info">
      <div className="about-info-avatar">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="about-info-inner">
        <p>Gender:</p>
        <span>Male</span>
      </div>
      <div className="about-info-inner">
        <p>Date of birth:</p>
        <span>January 22, 2002</span>
      </div>
      <div className="about-info-inner">
        <p>Phone:</p>
        <span>+84 328482434</span>
      </div>
      <div className="about-info-inner">
        <p>Email:</p>
        <span>lamchuc123456@gmail.com</span>
      </div>
      <div className="about-info-inner">
        <p>Github:</p>
        <span>
          <a href="https://github.com/bou2201" target="_blank" rel="noreferrer">
            github.com/bou2201
          </a>
        </span>
      </div>
    </div>
  );
};

export default Information;
