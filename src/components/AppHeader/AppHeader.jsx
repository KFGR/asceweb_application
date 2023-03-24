import "./AppHeader.css";
import React from "react";
import NavegationBar from '../NavegationBar';
import AppLogo from "../AppLogo/AppLogo";


function template(props) {
  const {id} = props;
  return (
    <section id="header" className="header">
      {id === "Home_header" && (
        <div id="Home_header" className="header-hero">
        <div className="container-fluid py-2 header-yllw"/> 
        <div className="container-fluid py-2 header-finite-ble"/> 
        <div className=" container-fluid hero-containerr hero-background-image">
          <div className='hero-header-menu'>
            <AppLogo/> 
             <NavegationBar color="white"/>
            {/* <AppHeader/> */}
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
    )}

    {id === "Normal_header" && (
       <div id="Normal_header" className="container-fluid text-center">
       <div className="header-area header-area--absolute">
         <div className="header-top-bar-info d-lg-block">
           <div className="container-fluid py-2 header-yllw"/> 
           <div className="container-fluid py-3 header-ble"/>        
         </div>
         <div className='header-bottom-wrap header-sticky'>
           <div className='container-fluid' style={{boxShadow:'none'}}>
             <div className='row'>
               <div className='col-lg-12'>
                 <div className='header position-relative'>
                   <div className='header-right'>
                     <div className='container-fluid header-containerr'>
                       <AppLogo/>
                       <NavegationBar color="black"/>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    )}

    </section>
  );
};

export default template;
