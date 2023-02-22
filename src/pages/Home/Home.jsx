import "./Home.css";
import React from "react";
import AppHeader from "../../components/AppHeader";
// import AppHeader from "../../Components/AppHeader";
// import Cards from "../../Components/Cards/Cards";
function template() {
  return (
    <div className="home">
      <AppHeader></AppHeader>

      <section id="intro">
        <div className="container-fluid justify-content-center intro-content" style={{marginBottom: '1%'}}>
          <div className="container-content">
            <div className="box">
                <div className="content d-flex justify-content-center align-items-center">
                  <p className="h1 h1-text-content" style={{width:'100%'}}>
                      <strong>The future starts with civil engineers</strong>
                  </p>
                </div>
                <div className="content d-flex justify-content-center align-items-center">
                  <p className="h3 h3-text-content" style={{width:'100%'}}>
                      Tough problems require innovative solutions.
                      Now is the time to be bold. ASCE members engineers 
                      tomorrow and reimagine infrastructure. Move forward faster with ASCEPUPR.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="container-fluid py-2 header-yllw"/> 

      {/* <section id='cards'>
        <Cards></Cards>
      </section> */}


</div>
  );
};

export default template;
