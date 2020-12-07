import React from "react";
import "./home.css";
import my_pict from "../assets/images/IMG_4966.JPG";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home_container">
      <div className="center_div">
        <img src={my_pict} alt="pict_puspa" className="my_img" />

        <h3>Full-stack developer (MERN) </h3>
        <hr />

        <div className="social_link">
          <Link
            to={{ pathname: "https://www.facebook.com/blackicea/" }}
            target="_blank"
          >
            <FaFacebook size={30} className="social_icons" />
          </Link>
          <Link to="https://www.facebook.com/blackicea/">
            <FaLinkedin size={30} className="social_icons" />
          </Link>
          <Link to="https://www.facebook.com/blackicea/">
            <FaTwitter size={30} className="social_icons" />
          </Link>
          <Link to="https://www.facebook.com/blackicea/">
            <FaInstagram size={30} className="social_icons" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
