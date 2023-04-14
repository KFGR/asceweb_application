import "./Competitions.css";
import React from "react";
import ContentCard from "../../components/ContentCard";
// import { Image } from "react-bootstrap"; //Calling the Image object, this object is already responsive
import imagename from '../../assets/Brand/Award.png'; //anothe method to call images, but you initialize the viewport

// images for competition cards
import canoeImage from '../../assets/Brand/ConcreteCanoe.png'
import steeleBridgeImage from '../../assets/Brand/SteeleBridge.png'
import sustainableImage from '../../assets/Brand/SustainableSolutions.png'
import surveyingImage from '../../assets/Brand/Surveying.png'
import constructionInstiImage from '../../assets/Brand/ConstructionInstitute.png'
import innovationImage from '../../assets/Brand/InnovationContest.jpg'

/*Important Competitions: *Concrete Canoe, Steele Bridge, Timber Strong, Sustainable Solutions, Innovation Contest, Surveying, Construction Institute*/

/*Other competitions: Concrete Bridge, Traffic Control, Geo-Wall, Plans Reading, Muddy Waters, Concrete Cornhole, Professional Paper, T-shirt Contest, Mystery Competition */

// At the end of the document, I am writing a new section to illustrate the two different ways to display images with react -Kelvin
/*Couple of errors noticed:
1. the tag <h8> is not a valid tag for modern browsers. You can use from h1 to h6, and create CSS classes to style them individually or style the tag directly, example:
Class creation:
 .h4-text{
  font-size: 8px;
  margin:0;
  padding:0;
    } 
    
Modifying the tag style (note this will modify every text with the tag <h4>
  h4{
    font-size: 8px;
    margin:0;
    padding:0;


2. Another thing to be aware of, In straight HTML CSS JS or VanillaJS, we use the term class, but in JSX format we use className.
    -You can do control+F to change the words from class to className.

3. These cards are all the same structure, focus on making a component card that has everything (image, button and information) and then reuse the component into different competitions.
    -Take a look to the ContentCard component that is under the folder of components.
    - The homepage has the component at the begining of the code.


4. For the buttons, make use of the component <button> because they are responsive and are easier to style.
      Example if you want to re-direct to another page: <a href="/home"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Join today</button></a>
      If the button performs an action on the same page, then the code has to be in javascript using {useState} inside the JSX document but before the return() statment of the function.
      Example:

      import React, { useState } from 'react';
      function button_open_modal() {
        const [showModal, setShowModal] = useState(false); -->do not show modal until an action

        const handleOpenModal = () => {
          setShowModal(true);
        };

        const handleCloseModal = () => {
          setShowModal(false);
        };

        return (
          <div>
            <button onClick={handleOpenModal}>Open Modal</button>
            {showModal && <Modal onClose={handleCloseModal} />}
          </div>
        );
      }

      export default ButtonWithModal;

  }*/

function template() { 
  return(
    <div className="Competitions">
      
      <h1>Competitions</h1>
      <p>These are the top ASCE Competitions, celebrated annually.</p>
      
      

      <div className="container">
        <div className = "row">
            <div className = "col-12 col-lg-3">
        
            {/* Concrete Canoe */}
            <ContentCard id="competition_card"
              imageSrc={canoeImage}
              imageAlt="none"
              title = "Concrete Canoe"
              // Above this line is the card. Below this line is the card's modal.
              // paragraph = "Details"
              modalTitle = "Concrete Canoe"
              competitionDescription = "The ASCE Concrete Canoe Competition provides students a unique opportunity to gain hands-on practical experience while testing their skills with concrete mix designs and project management challenges. This elite competition combining engineering excellence, hydrodynamic design, and racing technique is known as the ''America's Cup of Civil Engineering.''"
              modalImage = {canoeImage}
              
            />
          </div>

          <div class = "col-12 col-lg-3">
            {/* Steele Bridge */}
            <ContentCard id="competition_card"
              imageSrc={steeleBridgeImage}
              imageAlt="none"
              title = "Steele Bridge"
              // paragraph = "Details"
              modalTitle = "Steele Bridge"
              competitionDescription = "The Student Steel Bridge Competition challenges students to extend their classroom knowledge to a practical and hands-on steel-design project that grows their interpersonal and professional skills, encourages innovation, and fosters impactful relationships between students and industry professionals.  Each student team develops a concept for a scale-model steel bridge to span approximately 20 feet and to carry 2,500 pounds according to the competition rules. The team must determine how to fabricate their bridge and then plan for an efficient assembly under timed construction conditions at the competition. Bridges are also load-tested, weighed, and judged on aesthetics."
              modalImage = {steeleBridgeImage}
              
            />
          </div>
        

            
          <div class = "col-12 col-lg-3">
            {/* Timber Strong */}
            <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "Timber Strong"
              // paragraph = "Details"
              modalTitle ="Timber Strong"
              competitionDescription = "The competition seeks student teams to design and build an artistically creative 2-story wood light-framed building that is sustainable, aesthetically pleasing and structurally durable. The competition enables students to gain experience in performing aspects of common structural engineering design and practice as well as gain exposure to the management and building practices used in construction environments."
              modalImage = {imagename}
            />
            </div>
          

          <div class = "col-12 col-lg-3">
            {/* Sustaible Solutions */}
            <ContentCard id="competition_card"
              imageSrc={sustainableImage}
              imageAlt="none"
              title = "Sustainable Solutions"
              // paragraph = "Details"
              modalTitle = "Sustainable Solutions"
              competitionDescription = "The ASCE Sustainable Solutions Competition challenges students to develop a stronger understanding of sustainability and learn to incorporate sustainable solutions into everyday problems that engineers incur. Students are encouraged to be creative in their solutions and use all resources available."
              modalImage = {sustainableImage}
            />
          </div>
          

          

          <div class = "col-12 col-md-3">
            {/* Innovation Contest */}
            <ContentCard id="competition_card"
              imageSrc={innovationImage}
              imageAlt="none"
              title = "Innovation Contest"
              // paragraph = "Details"
              modalTitle = "Innovation Contest"
              competitionDescription = "Participating teams will develop and pitch their innovation to the judges and at a minimum provide proof-of-concept for its feasibility and innovative potential. The closer your innovation is to having a proof of concept and a business plan, the more persuasive the result. The mission of the 2023 ASCE Innovation Contest is to develop an innovation that addresses one of the following three ASCE Report Card topics: Drinking Water, Energy, and Roads."
              modalImage = {innovationImage}
            />
          </div>

          <div class = "col-12 col-md-3">
            {/* Surveying */}
            <ContentCard id="competition_card"
              imageSrc={surveyingImage}
              imageAlt="none"
              title = "Surveying"
              // paragraph = "Details"
              modalTitle = "Surveying"
              competitionDescription = "The ASCE UESI Surveying Competition’s educational and professional goals include a recognition of the importance of basic surveying principles to all civil engineering projects. Students will be required to use standard field and office equipment and procedures to solve common problems encountered in industry. A clear understanding of and ability to apply basic surveying principles will assist the graduate civil engineer in communicating and working with the surveying professionals on the job site and during the design process."
              modalImage = {surveyingImage}
            />
          </div>

          <div class = "col-12 col-md-3">
              {/* Construction Institute */}
              <ContentCard id="competition_card"
              imageSrc={constructionInstiImage}
              imageAlt="none"
              title = "Construction Institute"
              // paragraph = "Details"
              modalTitle = "Construction Institute"
              competitionDescription = "Each student team shall act as a construction engineering firm, and these responses shall be directed and delivered professionally, similarly to how a real company would address an owner requesting additional information from a firm during the pre-construction phase of a job. Sample projects will entertain all sectors of civil engineering, while the individual challenges will be related to: Traffic Control / Site Logistics, QA/QC, Safety, Public Outreach, Environment, Risk Management, and other concerns that project managers and engineers plan for."
              modalImage = {constructionInstiImage}
              />
          
            </div>
            </div>
          </div>

        </div> 
    
  );
};
export default template;


     