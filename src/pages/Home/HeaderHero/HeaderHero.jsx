import "./HeaderHero.css";
import React from "react";
// import AppHeader from '../AppHeader';
// import AppLogo from "../../../components/AppLogo";
// import NavegationBar from '../../../components/NavegationBar';
import AppHeader from "../../../components/AppHeader";
function template(){
  return (
    <div className="header-hero">
      <div className="container-fluid py-2 header-yllw"/> 
      <div className="container-fluid py-2 header-finite-ble"/> 
      <div className=" container-fluid hero-containerr hero-background-image">
        <div className='hero-header-menu'>
          {/* <AppLogo/> */}
          {/* <NavegationBar/> */}
          <AppHeader/>
        </div>
      <div className="px-4 py-5 my-5 text-center">
        {/* <img class="d-block mx-auto mb-4"  src={require("./buildings.png")} alt="" width="100%" height="auto"/> */}
        {/* <h1 className="display-5 fw-bold">Centered hero</h1> */}
        <div className="content d-flex justify-content-center align-items-center">
          <p id='intro_title' className="h1 h1-text-content" style={{width:'100%'}}>
              <strong>The future starts with civil engineers</strong>
          </p>
        </div>
        <div className="content d-flex justify-content-center align-items-center">
          <p id='intro_description' className="h3 h3-text-content" style={{width:'100%'}}>
              Tough problems require innovative solutions.
              Now is the time to be bold. ASCE members engineers 
              tomorrow and reimagine infrastructure. Move forward faster with ASCEPUPR.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default template;
