import "./Home.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faUsers} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
// import HeaderHero from './HeaderHero';
import ContentCard from '../../components/ContentCard';
import Award from '../../assets/Brand/Award.png';

function template (){
  console.log(Award);
  console.log(typeof Award);
  return (
    <div className="home">
      <ContentCard
        className = "d-block mx-lg-auto img-fluid shadow-box-right-sm"
        imageSrc = {Award}
        imageAlt = "notabout"
        title = "About Us"
        paragraph = "Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
      
      />
      {/* <HeaderHero/> */}
      {/* <AppHeader></AppHeader> */}

      {/* <section id="intro">
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
      </section> */}

      {/* <section id="intro">
          <div className="hero-image">
            <div className="hero-text">
              <div className="font-size:50px">I am Joe Doe</div>
              <p>And I'm a Photographer</p>
              <button>Hire me</button>
            </div>
          </div>
      </section> */}

      {/* <section id="intro">
        <div className="hero-containerr">
          <div className="hero-backgrond-image">
            <h1>Whatever hero</h1>
            <div className="col-lg-6 hero-content">
              <p className="lead">algo mas</p>
            </div>
          </div>
        </div>
      </section> */}
      

     

      {/* Section divider */}
      <div className="container-fluid py-2 header-yllw"/>
      {/* About US section */}
      <div className="about-us">
          <div className="container col-xxl-8 px-4 py-5">
            {/* About Us */}
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                {/* <img src={require("./bs.png")} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
                <Image src={require("../../assets/Brand/members.png")} className="d-block mx-lg-auto img-fluid shadow-box-right-sm" alt=""  />
                {/* <Image src={require("./bs.png")} className="d-block mx-lg-auto img-fluid shadow-box-right-sm" alt=""  /> */}

              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3 h1-text-content"><span>A</span>bout <span>U</span>s</h1>
                <h4 className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</h4>
                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div> */}
              </div>
            </div>

            {/* Activities*/}
            <div className="row flex-lg-row align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                {/* <img src={require("./bs.png")} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
                <Image src={require("../../assets/Brand/Award.png")} className="d-block mx-lg-auto img-fluid shadow-box-left-sm" alt=""  />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3 h1-text-content"><span>A</span>ctiviti<span>e</span>s</h1>
                <h4 className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</h4>
                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div> */}
              </div>
            </div>

            {/* Awards */}
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                {/* <img src={require("./bs.png")} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
                <Image src={require("../../assets/Brand/Award.png")} className="d-block mx-lg-auto img-fluid shadow-box-right-sm" alt=""  />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3 h1-text-content"><span>A</span>war<span>d</span>s</h1>
                <h4 className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</h4>
                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div> */}
              </div>
            </div>

            
          </div>
      </div>

  


       {/* Section divider */}
       <div className="container-fluid py-2 header-yllw"/> 


        <div className="container container-values">
          <div>
            <h1 className='h1-text-content' id='mission_txt' style={{color:'black', textAlign:'center'}}><strong>Our Mission</strong></h1>
            <div className="row ">
              <div className="col-12">
                <div className="row row-values">
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
    <div className="container-fluid py-2 header-finite-ble"/> 
    <div className="container-fluid py-2 header-yllw"/> 
    
    <div className="container container-content">
      <div>
        <h1 className='h1-text-content' id='mission_txt' style={{color:'black', textAlign:'center'}}><strong>Our Sponsors</strong></h1>
      <Image src={require("../../assets/Brand/clients.png")} alt="" width={500} height={500} style={{width:'100%', height:'auto'}}/>
      {/* <ImageModal show={showModal} onHide={handleCloseModal}/> */}
      </div>
    </div>
      
</div>
  );
};

export default template;
