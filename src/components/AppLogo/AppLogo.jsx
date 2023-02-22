import "./AppLogo.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';

function template() {
  return (
    <div className="app-logo">
      <div className='col-md-3'>
        <Navbar.Brand href='#home'><img src={require("../../assets/Brand/Logo.png")} alt='img-fluid'/></Navbar.Brand>
      </div>
    </div>
  );
};

export default template;
