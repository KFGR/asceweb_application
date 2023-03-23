import "./AppHeader.css";
import React from "react";
import NavegationBar from '../NavegationBar';
import AppLogo from "../AppLogo/AppLogo";


function template() {
  return (
    <section id="header" className="header">
    <div className="container-fluid text-center">
      <div className="header-area header-area--absolute">
        {/* <div className="header-top-bar-info d-lg-block">
          <div className="container-fluid py-2 header-yllw"/> 
          <div className="container-fluid py-3 header-ble"/>        
        </div> */}
        <div className='header-bottom-wrap header-sticky'>
          <div className='container-fluid' style={{boxShadow:'none'}}>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='header position-relative'>
                  <div className='header-right'>
                    <div className='container-fluid header-containerr'>
                      <AppLogo></AppLogo>
                      <NavegationBar></NavegationBar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default template;
