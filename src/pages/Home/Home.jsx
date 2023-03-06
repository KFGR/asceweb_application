import "./Home.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faUsers, faTrowelBricks } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";


function template (){
  return (
    <div className="home">
      {/* <AppHeader></AppHeader> */}

      <section id="intro">
        <div className="container-fluid justify-content-center intro-content" style={{marginBottom: '1%'}}>
          <div className="container-content ">
            <div className="box">
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
      </section>

      {/* Section divider */}
      <div className="container-fluid py-2 header-yllw"/> 

      {/* Section for Mission Vission and Values */}
      <div className="container-fluid  container-content values-content">
        <div>
          <h1 className='h1-text-content' id='mission_txt' style={{color:'white', textAlign:'center'}}><strong>About Us</strong></h1>
        <div className="col">
         <div className="row" style={{paddingRight:'5%', paddingBottom:'5%'}}>
          <div className="col-sm-4">
            <FontAwesomeIcon icon={faTrowelBricks} size="2" style={{color:'red'}}/>
          </div>
          <div className="col-sm-8" style={{paddingRight:'5%'}}>
            <div className="container-fluid container-shadow" style={{backgroundColor:'#144a9a'}}> {/*container-shadow is not working because of container-fluid */}
              <h2><strong>Foundation</strong></h2>
              <h4 style={{color: 'white'}}>
                Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h4>
          </div>
          </div>
        </div>

        {/* Vision */}
        <div className="row" style={{paddingLeft:'5%', paddingBottom:'5%'}}>
          <div className="col-sm-8" style={{paddingRight:'5%'}}>
            <div className="container-fluid container-shadow" style={{backgroundColor:'#144a9a'}}> {/*container-shadow is not working because of container-fluid */}
              <h2><strong>Activities</strong></h2>
              <h4 style={{color: 'white'}}>
                Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h4>
          </div>
          </div>
          <div className="col-sm-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="16" fill="currentColor" className="bi bi-globe-americas globe-icon" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
            </svg>
          </div>
        </div>

        {/* Values */}
        <div className="row" style={{paddingRight:'5%', paddingBottom:'5%'}}>
          <div className="col-sm-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="16" fill="currentColor" className="bi bi-globe-americas globe-icon" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
            </svg>
          </div>
          <div className="col-sm-8" style={{paddingRight:'5%'}}>
            <div className="container-fluid container-shadow" style={{backgroundColor:'#144a9a'}}> {/*container-shadow is not working because of container-fluid */}
              <h2><strong>Awards</strong></h2>
              <h4 style={{color: 'white'}}>
                Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h4>
          </div>
          </div>
        </div>
        
        </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="container-fluid py-2 header-yllw"/> 


        <div className="container container-values">
          <div>
            <h1 className='h1-text-content' id='mission_txt' style={{color:'black', textAlign:'center'}}><strong>Our Mission</strong></h1>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-6">
                      <div className="grid-item move-up">
                        <div className="ht-box-icon">
                          <div className="icon-box-wrap">
                            <div className="content-header">
                              <div className="icon">
                                <FontAwesomeIcon icon={faHandshake} />
                              </div>
                              <h5 className="heading">To our Partnets</h5>
                            </div>
                            <div className="content">
                              <h4 style={{color:'black'}}>
                                To expose your brand will be presented in front of hundreds of people in the regional spectrum, 
                                and in the national spectrum will be in the thousands.
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-6">
                    <div className="grid-item move-up">
                      <div className="ht-box-icon">
                        <div className="icon-box-wrap">
                          <div className="content-header">
                            <div className="icon">
                              <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <h5 className="heading">To our Students</h5>
                          </div>
                          <div className="content">
                            <h4 style={{color:'black'}}>
                              To connect more of our members to companies through seminars, internships and activities,
                              to expose them to modern and contemporary projection experiences that can provide them professional development.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="grid-item move-up">
                      <div className="ht-box-icon">
                        <div className="icon-box-wrap">
                          <div className="content-header">
                            <div className="icon">
                            <FontAwesomeIcon icon={faEarth} />
                            </div>
                            <h5 className="heading">To our Comunity</h5>
                          </div>
                          <div className="content">
                            <h4 style={{color:'black'}}>
                              Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="grid-item move-up">
                      <div className="ht-box-icon">
                        <div className="icon-box-wrap">
                          <div className="content-header">
                            <div className="icon">
                              <FontAwesomeIcon icon={faHandshake} />
                            </div>
                            <h5 className="heading">hola</h5>
                          </div>
                          <div className="content">
                            <h4 style={{color:'black'}}>
                              Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
        </div>
      </div>

    {/* Section divider */}
    <div className="container-fluid py-2 header-yllw"/> 
    <div className="container container-content">
      <div>
        <h1 className='h1-text-content' id='mission_txt' style={{color:'black', textAlign:'center'}}><strong>Our Sponsors</strong></h1>
      <Image src={require("./clients.png")} alt="" width={500} height={500} style={{width:'100%', height:'auto'}}/>
      {/* <ImageModal show={showModal} onHide={handleCloseModal}/> */}
      </div>
    </div>
      
</div>
  );
};

export default template;
