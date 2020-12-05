import React from "react";
import "./styles.css";
import b_logo from "../../assets/images/b_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_container">
      <div className="myLogo">
          <Link to ={'/'} className="link">
          <img src={b_logo} alt="b-logo" className="b_logo" />      
          <h2 className="com_name">LACKICE</h2>  
           </Link>
      </div>
    </div>
  );
};

export default Header;
