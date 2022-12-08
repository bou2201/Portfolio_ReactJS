import React from "react";
import Avatar from "../../../assets/avatar-about.jpg";
import ItemInfor from "./ItemInfor";

const Infor = () => {
  return (
    <div className="about-info">
      <div className="about-info-avatar">
        <img src={Avatar} alt="avatar" />
      </div>
      <ItemInfor title="Gender" explain="Male" />
      <ItemInfor title="Date of birth" explain="January 22, 2002" />
      <ItemInfor title="Phone" explain="+84 328482434" />
      <ItemInfor title="Email" explain="lamchuc123456@gmail.com" />
      <ItemInfor
        title="Github"
        explain="github.com/bou2201"
        href="https://github.com/bou2201"
      />
    </div>
  );
};

export default Infor;
