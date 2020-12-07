import React from "react";
import "./styles.css";
import b_logo from "../../assets/images/b_logo.png";
import { Link } from "react-router-dom";
import DigitalClock from "../digitalClock/DigitalClock";

const Header = () => {
  return (
    <div className="header_container">
      <div className="myLogo">
          <Link to ={'/'} className="link">
          <img src={b_logo} alt="b-logo" className="b_logo" />      
          <h2 className="com_name">LACKICE</h2>  
           </Link>
      </div>
      <DigitalClock/>
      <div className="menu_container">
          <Link to ="/" className="menu_item" >Home</Link>
          <Link to ="/about" className="menu_item">About</Link>
          <Link to ="/expe" className="menu_item">Experience</Link>
          <Link to ="/project" className="menu_item">Projects</Link>
          <Link to ="/contact" className="menu_item">Contact</Link>
          
      </div>
    </div>
  );
};

export default Header;
