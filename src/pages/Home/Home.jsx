import "./Home.css";
import Counter from "./Counter";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandshake, faUsers} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";


import ContentCard from '../../components/ContentCard';
import Calendar from '../../components/Calendar';
import Carousel from "../../components/Carousel";
import Image3 from '../../assets/Brand/Image3.jpeg';

//Images for the Carousel
import Gallagher from '../../assets/Carousel_images/Gallagher3.jpg';
//newones
import first from '../../assets/Carousel_images/1.png';
import second from '../../assets/Carousel_images/2.png';
import third from '../../assets/Carousel_images/3.png';

import fourth from '../../assets/Carousel_images/4.png';
import fifth from '../../assets/Carousel_images/5.png';
import sixth from '../../assets/Carousel_images/6.png';

import seventh from '../../assets/Carousel_images/7.png';
import eight from '../../assets/Carousel_images/8.png';
import nine from '../../assets/Carousel_images/9.png';

import ten from '../../assets/Carousel_images/10.png';
import eleven from '../../assets/Carousel_images/11.png';
import twelve from '../../assets/Carousel_images/12.png';

function template (){
  
  return (
    <div className="home">
      {/* Section divider */}
      <div className="container-fluid py-2 header-yllw"/>
      
      {/* Section for cards */}
      <section id="About">

      {/* About us */}
      <ContentCard 
        id = "third"
        className = "d-block mx-lg-auto img-fluid shadow-box-right-sm"
        imageSrc = {Gallagher}
        imageAlt = "notabout"
        title = "About Us"
        paragraph = "Welcome to the American Civil Engineer Student Chapter of the Polytechnic University of Puerto Rico! Our student chapter is dedicated to inspiring and exposing our members to new experiences, while providing a space for professional development and cultural enrichment. Our mission is to connect our members to companies through seminars, internships, and activities that will expose them to modern and contemporary projects."
      
      />
      {/* Activities */}
      <ContentCard 
        id = "fourth"
        className = "d-block mx-lg-auto img-fluid shadow-box-left-sm"
        imageSrc = {Image3}
        imageAlt = "Activities"
        title = "Activities"
        paragraph = "Our chapter provides a variety of activities for our members, including Info-Sessions with Professional Engineers or Industry Leaders, educational trips, ASCE Student Symposia, workshops, fundraisers, and community service. We aim to provide a well-rounded experience that helps our members grow personally and professionally. Through our activities, our members can learn from experts in the field, showcase their skills, learn new skills, give back to the community, and stay up-to-date with the latest developments in civil engineering."
      
      />
    </section>

       <div className="container-fluid py-2 header-yllw"/>

        {/* Section to display the ammount of members, years and sponsors */}
       <section id="Counter" className="counts">
      <div className="container-fluid" style={{paddingTop:'2rem'}}>
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
            <span><Counter start={0} end={52}/></span>            
            <p>Active Members</p>
          </div>
          {/* Third Counter */}
          <div className="col-lg-4 col-5 col-3 col-6 text-center" style={{maxWidth:'100%'}}>
            <span><Counter start={0} end={6}/></span>
            <p>Sponsors</p>
          </div>
        </div>
        </div>
      </div>
    </section>

        {/* Section to display images about the chapter,  */}
       {/* <section className="container-fluid"> */}
       <section className="Images-carousel">
        <div className="container-fluid">
       <div className="row p-4 pb-0 pe-lg-0 align-items-center rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-6 column-padding text-center" style={{margin:'auto'}}>
              <Carousel image1={first} image2={second} image3={third}/>
            </div>
            <div className="col-lg-6 column-padding text-center" style={{margin:'auto'}}>
              <Carousel image1={fourth} image2={fifth} image3={sixth}/>
            </div>
        </div>
        <div className="row p-4 pb-0 pe-lg-0 align-items-center rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-6 column-padding text-center" style={{margin:'auto'}}>
              <Carousel image1={seventh} image2={eight} image3={nine}/>
            </div>
            <div className="col-lg-6 column-padding text-center" style={{margin:'auto'}}>
              <Carousel image1={ten} image2={eleven} image3={twelve}/>
            </div>
        </div>
        </div>
       </section>


    {/* Section divider */}
    <div className="container-fluid py-2 header-finite-ble"/> 
    <div className="container-fluid py-2 header-yllw"/> 

    <section id="calendar_activities" className="container-fluid home-calendar">
    <div className="container-fluid" style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
        <div className="container-fluid">
          <h1 className='h1-text-content-calendar' id='mission_txt' style={{color:'black', textAlign:'center'}}><strong>Calendar Activities</strong></h1>
          <div className="row home-calendar">
            <Calendar/>
          </div>
        </div>
      </div>
    </section>

    <div className="container-fluid py-2 header-finite-ble"/> 
    <div className="container-fluid py-2 header-yllw"/> 

    <div className="container container-content">
      <div>
        <h1 className='h1-text-content' id='mission_txt' style={{color:'black', textAlign:'center'}}><strong>Our Sponsors</strong></h1>
        <Image src={require("../../assets/Brand/sponsors.png")} alt="" width={500} height={500} style={{width:'100%', height:'auto', paddingTop:'5%'}}/>
      </div>
    </div>
</div>
  );
};

export default template;
