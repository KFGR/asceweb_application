import "./Competitions.css";
import React from "react";
import ContentCard from "../../components/ContentCard";

import FormCompetition from "../../components/FormCompetition";

// import { Image } from "react-bootstrap"; //Calling the Image object, this object is already responsive
import Calendar from "../../components/Calendar";
  // import Select from  'react-select';
  // import 'react-select/dist/react-select.css';

// import { Button } from "react-bootstrap";



// images for Competitions in Modals
import canoeImage from '../../assets/Brand/ConcreteCanoe.png'
import constructionInstituteNEW from '../../assets/Brand/ConstructionInstitute-NEW-VersionTwo.jpg'

//Images for Competitions in cards
import smallConcreteImage from '../../assets/Brand/SmallConcreteCanoe.jpg'

//Images Resized in Canvan
import SteelBridgeResize from '../../assets/Brand/SteelBridgeCanvan.png'
import TimberStrongResize from '../../assets/Brand/TimberStrongCanvan.png'
import SurveyingResize from '../../assets/Brand/SurveyingCanvan.png'
import SustainableSolutionsResize from '../../assets/Brand/SustainableSolutionsCanvan.png'
import InnovationContestResize from '../../assets/Brand/InnovationContestCanvan.png'



  
function Template() { 



//Below are JS functions for button sending radio button selection to back end with Submit button

  return(
    <>

      <div className="cardHeader">
        <h1>Competitions</h1>
        <p>These are the top ASCE Competitions, celebrated annually.</p>
      </div>
      <div className="sectionCards">

          <div className="item">
              {/* Concrete Canoe */}
              <ContentCard id="competition_card" 
              imageSrc={smallConcreteImage}
              imageAlt="none"
              title = "Concrete Canoe"
              // Above this line is the card. Below this line is the card's modal.
              // paragraph = "Details"
              modalTitle = "Concrete Canoe"
              competitionDescription = "The ASCE Concrete Canoe Competition provides students a unique opportunity to gain hands-on practical experience while testing their skills with concrete mix designs and project management challenges. This elite competition combining engineering excellence, hydrodynamic design, and racing technique is known as the ''America's Cup of Civil Engineering.''"
              modalImage = {canoeImage}
            />
          </div>

          <div className="item">
            {/* Steele Bridge */}
            <ContentCard id="competition_card" 
              imageSrc={SteelBridgeResize}
              imageAlt="none"
              title = "Steel Bridge"
              // paragraph = "Details"
              modalTitle = "Steel Bridge"
              competitionDescription = "The Student Steel Bridge Competition challenges students to extend their classroom knowledge to a practical and hands-on steel-design project that grows their interpersonal and professional skills, encourages innovation, and fosters impactful relationships between students and industry professionals.  Each student team develops a concept for a scale-model steel bridge to span approximately 20 feet and to carry 2,500 pounds according to the competition rules. The team must determine how to fabricate their bridge and then plan for an efficient assembly under timed construction conditions at the competition. Bridges are also load-tested, weighed, and judged on aesthetics."
              modalImage = {SteelBridgeResize}
            />
          </div>

          <div className="item">
              {/* Surveying */}
              <ContentCard id="competition_card" 
              imageSrc={SurveyingResize}
              imageAlt="none"
              title = "Surveying"
              // paragraph = "Details"
              modalTitle = "Surveying"
              competitionDescription = "The ASCE UESI Surveying Competition’s educational and professional goals include a recognition of the importance of basic surveying principles to all civil engineering projects. Students will be required to use standard field and office equipment and procedures to solve common problems encountered in industry. A clear understanding of and ability to apply basic surveying principles will assist the graduate civil engineer in communicating and working with the surveying professionals on the job site and during the design process."
              modalImage = {SurveyingResize}
              />
          </div>


          <div className="item">
                {/* Construction Institute - PLACE THE CONSTRUCTION INSTITUTE IMAGE IN THE TIMBER STRONG IMAGE */}
                <ContentCard id="competition_card" 
                imageSrc={constructionInstituteNEW}
                imageAlt="none"
                title = "Construction Institute"
                // paragraph = "Details"
                modalTitle = "Construction Institute"
                competitionDescription = "Each student team shall act as a construction engineering firm, and these responses shall be directed and delivered professionally, similarly to how a real company would address an owner requesting additional information from a firm during the pre-construction phase of a job. Sample projects will entertain all sectors of civil engineering, while the individual challenges will be related to: Traffic Control / Site Logistics, QA/QC, Safety, Public Outreach, Environment, Risk Management, and other concerns that project managers and engineers plan for."
                modalImage = {constructionInstituteNEW}
                />
          </div>

        


          <div className="item">
            {/* Timber Strong */}
            <ContentCard id="competition_card" 
              imageSrc={TimberStrongResize}
              imageAlt="none"
              title = "Timber Strong"
              // paragraph = "Details"
              modalTitle ="Timber Strong"
              competitionDescription = "The competition seeks student teams to design and build an artistically creative 2-story wood light-framed building that is sustainable, aesthetically pleasing and structurally durable. The competition enables students to gain experience in performing aspects of common structural engineering design and practice as well as gain exposure to the management and building practices used in construction environments."
              modalImage = {TimberStrongResize}
            />
          </div>

          

          <div className="item">
            {/* Sustaible Solutions */}
            <ContentCard id="competition_card" 
              imageSrc={SustainableSolutionsResize}
              imageAlt="none"
              title = "Sustainable Solutions"
              // paragraph = "Details"
              modalTitle = "Sustainable Solutions"
              competitionDescription = "The ASCE Sustainable Solutions Competition challenges students to develop a stronger understanding of sustainability and learn to incorporate sustainable solutions into everyday problems that engineers incur. Students are encouraged to be creative in their solutions and use all resources available."
              modalImage = {SustainableSolutionsResize}
            />
          </div>
          
          <div className="item">
            {/* Innovation Contest */}
            <ContentCard id="competition_card" 
              imageSrc={InnovationContestResize}
              imageAlt="none"
              title = "Innovation Contest"
              // paragraph = "Details"
              modalTitle = "Innovation Contest"
              competitionDescription = "Participating teams will develop and pitch their innovation to the judges and at a minimum provide proof-of-concept for its feasibility and innovative potential. The closer your innovation is to having a proof of concept and a business plan, the more persuasive the result. The mission of the 2023 ASCE Innovation Contest is to develop an innovation that addresses one of the following three ASCE Report Card topics: Drinking Water, Energy, and Roads."
              modalImage = {InnovationContestResize}
            />
          </div>
        </div>

        <div className="note">
          <p>Other competitions aren't celebrated annually, rather the official ASCE decides which of these take place in a given year. These competitions are: Concrete Bridge, Traffic Control, Geo-Wall, Muddy Waters, Concrete Cornhole, Plans Reading, Professional Paper, T-shirt Contest, and Mystery Competiton.</p>
        </div>

        <FormCompetition/>

        <h1 className='calendarTittle'><strong>Calendar Activities</strong></h1>
        <Calendar/>
  </> 
 );
};
export default Template;