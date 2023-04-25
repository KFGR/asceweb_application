import "./Home.css";
import Counter from "./Counter";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faUsers} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
// import HeaderHero from './HeaderHero';
import ContentCard from '../../components/ContentCard';
import Award from '../../assets/Brand/Award.png';
import Members from '../../assets/Brand/members.png';
import Gallagher from '../../assets/Brand/Gallagher3.jpg';
import Image3 from '../../assets/Brand/Image3.jpeg';

import image1 from '../../assets/Brand/Gallagher3.jpg';
import image2 from '../../assets/Brand/Image2.jpeg';
import image3 from '../../assets/Brand/Image7.jpeg';


import Calendar from '../../components/Calendar';
// import Carousel from '../../components/Carousel';
import Carousel from "../../components/Carousel";


function template (){
  
  return (
    <div className="home">
      {/* Section divider */}
      <div className="container-fluid py-2 header-yllw"/>

      <section id="About">

      {/* About us */}
      <ContentCard 
        id = "third"
        className = "d-block mx-lg-auto img-fluid shadow-box-right-sm"
        imageSrc = {Gallagher}
        imageAlt = "notabout"
        title = "About Us"
        paragraph = "Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
      
      />
      {/* Activities */}
      <ContentCard 
        id = "fourth"
        className = "d-block mx-lg-auto img-fluid shadow-box-left-sm"
        imageSrc = {Image3}
        imageAlt = "Activities"
        title = "Activities"
        paragraph = "Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
      
      />
    </section>

    <div className="container-fluid py-2 header-yllw"/> 


  
       {/* Section divider */}
       <div className="container-fluid py-2 header-finite-ble"/>

      
        <div className="container-fluid container-values">
          <div className="container">
            <h1 className='h1-text-content' id='mission_txt' style={{color:'black', textAlign:'center'}}><strong>Mission and Values </strong></h1>
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
                              To inspire and expose all our members to new experiences and create a space where 
                              they can develop themselves professionally and enrich them through a competitive culture.
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
                            <h5 className="heading" style={{color:'black'}}>Vision</h5>
                          </div>
                          <div className="content">
                            <h4 style={{color:'black'}}>
                            Lead all our members through the experiences the gather to have better tools for them to increase their chances at better opportunities.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="container-fluid py-2 header-finite-ble"/>
       <div className="container-fluid py-2 header-yllw"/>

       <section className="container-fluid">
       <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            <Carousel image1={image1} image2={image2} image3={image3}/>
            </div>
            <div className="col-lg-5 offset-lg-1 p-0  shadow-lg">
            <Carousel image1={image1} image2={image2} image3={image3}/>            </div>
        </div>
        

       </section>

      <section id="Counter" className="counts">
      <div className="container-fluid" style={{padding:'1rem'}}>
        <div className="container-fluid">
          <h1 className='h1-text-content-chapter' id='mission_txt' style={{color:'black', textAlign:'center'}}><strong>Our Chapter</strong></h1>
        <div className="row counters">
          {/* First Counter */}
          <div className="col-lg-4 col-5 col-3 col-6 text-center" style={{maxWidth:'100%'}}>
            <Counter start={0} end={10}/>
            <p>Active Years</p>
          </div>
          {/* Second Counter */}
          <div className="col-lg-4 col-5 col-3 col-6 text-center" style={{maxWidth:'100%'}}>
            <span><Counter start={0} end={50}/></span>            
            <p>Active Members</p>
          </div>
          {/* Third Counter */}
          <div className="col-lg-4 col-5 col-3 col-6 text-center" style={{maxWidth:'100%'}}>
            <span><Counter start={0} end={10}/></span>
            <p>Sponsors</p>
          </div>
        </div>
        </div>
      </div>
    </section>
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
