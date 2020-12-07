import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const InfoCard = ({info}) => {
    const {image_link, name, para, web_link} = info

    return (
        <div className="info_container">
        <h5 className="info_text"> 
         {para}
          </h5>
          <p>{name}</p>
          <div>
              <a href={web_link} target="_blank">
              <img src={image_link} alt={name}  className="card_image"/>
              </a>
          </div>
        </div>
    )
}

export default InfoCard
