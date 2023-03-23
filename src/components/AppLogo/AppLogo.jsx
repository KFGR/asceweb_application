import "./AppLogo.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Icon from "./logo";

function template() {
  return (
    <div className="app-logo">
      {/* <div className='col-md-4'> col-md-3 */}
        {/* <Navbar.Brand href='#home'><img src={require("../../assets/Brand/Logo.png")} alt='img-fluid'/></Navbar.Brand> */}
        <div className="svg-container">
         <Navbar.Brand href='/Home'><svg><Icon/></svg></Navbar.Brand>
        </div>
      </div>
    // </div>
  );
};

export default template;


