import "./Home.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faUsers} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
// import HeaderHero from './HeaderHero';
import ContentCard from '../../components/ContentCard';
import Award from '../../assets/Brand/Award.png';
import Members from '../../assets/Brand/members.png';

function template (){
  return (
    <div className="home">
      <section id="About">
      {/* About US section */}
      {/* Section divider */}
      <div className="container-fluid py-2 header-yllw"/>
      {/* About us */}
      <ContentCard 
        id = "first"
        className = "d-block mx-lg-auto img-fluid shadow-box-right-sm"
        imageSrc = {Members}
        imageAlt = "notabout"
        title = "About Us"
        paragraph = "Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
      
      />
      {/* Activities */}
      <ContentCard 
        id = "second"
        className = "d-block mx-lg-auto img-fluid shadow-box-left-sm"
        imageSrc = {Award}
        imageAlt = "notabout"
        title = "Activities"
        paragraph = "Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
      
      />
      {/* AWARS */}
      {/* About us */}
      <ContentCard 
        id = "first"
        className = "d-block mx-lg-auto img-fluid shadow-box-right-sm"
        imageSrc = {Award}
        imageAlt = "notabout"
        title = "Awards"
        paragraph = "Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
      
      />
    </section>


       {/* Section divider */}
       <div className="container-fluid py-2 header-yllw"/> 

      
        <div className="container-fluid container-values">
          <div className="container">
            <h1 className='h1-text-content' id='mission_txt' style={{color:'white', textAlign:'center'}}><strong>Mission and Values </strong></h1>
            <div className="row ">
              <div className="col-12">
                <div className="row row-values">
                  <div className="col-lg-6">
                      <div className="grid-item move-up">
                        <div className="ht-box-icon">
                          <div className="icon-box-wrap">
                            <div className="content-header">
                              <div className="icon">
                                <FontAwesomeIcon icon={faHandshake}  />
                              </div>
                              <h5 className="heading" style={{color:'black'}}>Mission</h5>
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
                            <h5 className="heading" style={{color:'black'}}>Values</h5>
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
