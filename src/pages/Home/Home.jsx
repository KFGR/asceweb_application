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
// import image1 from '../../assets/Carousel_images/Gallagher2.jpeg';
// import image6 from '../../assets/Carousel_images/Image6.jpeg';
// import image2 from '../../assets/Carousel_images/Image2.jpeg';

// import image3 from '../../assets/Carousel_images/Image7.jpeg';
// import image4 from '../../assets/Carousel_images/Image4.jpeg';
// import image5 from '../../assets/Carousel_images/Image5.jpeg';

// import image8 from '../../assets/Carousel_images/image8.jpeg';
// import image9 from '../../assets/Carousel_images/image9.jpeg';

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

        {/* Section to display images about the chapter,  */}
       <section className="container-fluid">
       <div className="row p-4 pb-0 pe-lg-0 align-items-center rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-6 column-padding" style={{margin:'auto'}}>
              <Carousel image1={first} image2={second} image3={third}/>
            </div>
            <div className="col-lg-6 column-padding" style={{margin:'auto'}}>
              <Carousel image1={fourth} image2={fifth} image3={sixth}/>
            </div>
        </div>
        <div className="row p-4 pb-0 pe-lg-0 align-items-center rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-6 column-padding" style={{margin:'auto'}}>
              <Carousel image1={seventh} image2={eight} image3={nine}/>
            </div>
            <div className="col-lg-6 column-padding" style={{margin:'auto'}}>
              <Carousel image1={ten} image2={eleven} image3={twelve}/>
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
        <Image src={require("../../assets/Brand/clients.png")} alt="" width={500} height={500} style={{width:'100%', height:'auto'}}/>
      </div>
    </div>
</div>
  );
};

export default template;
