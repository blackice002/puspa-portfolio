import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const JobInfo = ({ info }) => {
  const { image_link, name, resp, web_link, tech } = info;

  return (
    <div className="job_info_container">
      <div className="info_left">
        <a href={web_link} target="_blank">
          <img src={image_link} alt={name} className="job_card_image" />
        </a>
      </div>
      <div className="info_right">
        <h5 className="info_text">{name}</h5>
        <p>{name} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt earum delectus! Illo quo repudiandae sapiente cumque officia quia quasi magnam! Explicabo at veritatis iste doloribus ipsum corporis id eos?</p>
        <ul className="tech_items">
            {tech.map((item, i)=>(
                <li key={i} className="tech_item">
                   {item}
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default JobInfo;
