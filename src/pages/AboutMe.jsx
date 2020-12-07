import React from "react";
import "./aboutMe.css";
import myData from "../data.json";
import { BiDownArrow } from "react-icons/bi";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMongodb,
  SiAdobepremiere,
} from "react-icons/si";
import {
  FaNode,
  FaCss3Alt,
  FaWordpressSimple,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";

import InfoCard from "../components/infoCard/InfoCard";
import JobInfo from "../components/infoCard/JobInfo";

const AboutMe = () => {
  return (
    <div className="about_container">
      <div className="sign">
        <BiDownArrow size={30} color={"red"} />
      </div>

      <div className="app_container">
        <FaReact className="app_name" />
        <FaJsSquare className="app_name" />
        <FaHtml5 className="app_name" />
        <FaNode className="app_name" />
        <FaCss3Alt className="app_name" />
        <SiMongodb className="app_name" />
        <SiAdobephotoshop className="app_name" />
        <SiAdobeillustrator className="app_name" />
        <FaWordpressSimple className="app_name" />
        <SiAdobepremiere className="app_name" />
      </div>

      <h2 className="section_title">EDUCATION</h2>
      <div className="data_container">
        {myData.education.map((info) => (
          <InfoCard info={info} key={info.id} />
        ))}
      </div>
      <h2 className="section_title">EXPERIENCE</h2>
      <div className="data_container">
        {myData.experience.map((info) => (
          <JobInfo info={info} key={info.id} />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
