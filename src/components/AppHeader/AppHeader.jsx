import "./AppHeader.css";
import React from "react";
import NavegationBar from '../NavegationBar';
import AppLogo from "../AppLogo/AppLogo";
import image from "../../assets/Brand/buildings.png";

function template(props) {
  const {id} = props;
  return (
    <section id="header" className="header">
      {/* {id === "Home_header" && (
        <div id="Home_header" className="header-hero">
        <div className="container-fluid py-2 header-yllw"/> 
        <div className="container-fluid py-2 header-finite-ble"/> 
        <div className=" container-fluid hero-containerr hero-background-image">
          <div className='hero-header-menu'>
            <AppLogo id="Header_logo"/> 
             <NavegationBar color="white"/>
          </div>
        <div className="px-4 py-5 my-5 text-center">
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
    )} */}

    {id === "Normal_header" && (
      //  <div id="Normal_header" className="container-fluid text-center">
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
                     <AppLogo id="Header_logo"/>
                       <NavegationBar color="black"/>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    //  </div>
    )}

{/* {id === "another_home_header" && (
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
                   <AppLogo id="Header_logo"/>
                     <NavegationBar color="black"/>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       

      <div className="container-fluid">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-4 p-3 p-lg-5 pt-lg-3">
              <h1 className="h1-text-content"><strong>The future starts with civil engineers</strong></h1>
              <p className="lead">
                "Tough problems require innovative solutions.
                Now is the time to be bold. ASCE members engineers 
                tomorrow and reimagine infrastructure. Move forward faster with ASCEPUPR."
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a href="/home"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Join today</button></a>
              </div>
            </div>
            <div className="header-image col-lg-4 offset-lg-1 p-0  shadow-lg">
                <img className="rounded-lg-3" src={image} alt="" width="100%" height={"100%"}/>
            </div>
        </div>
      </div>
     </div>
    )} */}

{id === "Home_header" && (
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
                   <AppLogo id="Header_logo"/>
                     <NavegationBar color="black"/>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

      <div className="container-fluid">
          <div className="row row-me p-4 pb-0 pe-lg-0 pt-lg-5  rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
              <h1 className="h1-title-header"><strong>The future starts with civil engineers</strong></h1>
              <p className="lead">
              The only one who succeeds in the world is the one who stands up 
              and looks for the circumstances and creates them if he does not find them.
              - George Bernard Shaw
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a href="/StudentSignUp"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Join today</button></a>
              </div>
            </div>
            <div className="header-image col-lg-6 p-0">
                <img className="rounded-lg-3" src={image} alt="" width="100%" height={"100%"}/>
            </div>
        </div>
      </div>
     </div>
    )}

    </section>
  );
};

export default template;
