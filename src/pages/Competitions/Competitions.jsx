import "./Competitions.css";
import React from "react";
import ContentCard from "../../components/ContentCard";

import FormCompetition from "../../components/FormCompetition";

// import { Image } from "react-bootstrap"; //Calling the Image object, this object is already responsive
import imagename from '../../assets/Brand/Award.png'; //anothe method to call images, but you initialize the viewport
import Calendar from "../../components/Calendar";
  // import Select from  'react-select';
  // import 'react-select/dist/react-select.css';

import { Form } from 'react-bootstrap';
import { useState } from "react";

// import { Button } from "react-bootstrap";



// images for Competitions in Modals
import canoeImage from '../../assets/Brand/ConcreteCanoe.png'
import steeleBridgeImage from '../../assets/Brand/members.png'
import sustainableImage from '../../assets/Brand/SustainableSolutions.png'
import surveyingImage from '../../assets/Brand/Surveying.png'
import constructionInstiImage from '../../assets/Brand/ConstructionInstitute.png'
import innovationImage from '../../assets/Brand/InnovationContest.jpg'
import constructionInstituteNEW from '../../assets/Brand/ConstructionInstitute-NEW-VersionTwo.jpg'

//Images for Competitions in cards
import smallConcreteImage from '../../assets/Brand/SmallConcreteCanoe.jpg'
import smallSteelImage from '../../assets/Brand/SmallSteelBridge.jpg'
import smallSurveyingImage from '../../assets/Brand/SmallSurveying.jpg'
import smallTimberStrongImage from '../../assets/Brand/SmallTimberStrong.jpg'
import smallSustainableSolutionsImage from '../../assets/Brand/SmallSustainableSolutions.jpg'
import smallInnovationContestImage from '../../assets/Brand/SmallInnovationContest.jpg'

//Images Resized in Canvan
import SteelBridgeResize from '../../assets/Brand/SteelBridgeCanvan.png'
import TimberStrongResize from '../../assets/Brand/TimberStrongCanvan.png'
import SurveyingResize from '../../assets/Brand/SurveyingCanvan.png'
import SustainableSolutionsResize from '../../assets/Brand/SustainableSolutionsCanvan.png'
import InnovationContestResize from '../../assets/Brand/InnovationContestCanvan.png'


/*Important Competitions: *Concrete Canoe, Steele Bridge, Timber Strong, Sustainable Solutions, Innovation Contest, Surveying, Construction Institute*/

/*Other competitions: Concrete Bridge, Traffic Control, Geo-Wall, Plans Reading, Muddy Waters, Concrete Cornhole, Professional Paper, T-shirt Contest, Mystery Competition */

// At the end of the document, I am writing a new section to illustrate the two different ways to display images with react -Kelvin
/*Couple of errors noticed:
1. the tag <h8> is not a valid tag for modern browsers. You can use from h1 to h6, and create CSS classes to style them individually or style the tag directly, example:
className creation:
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


2. Another thing to be aware of, In straight HTML CSS JS or VanillaJS, we use the term className, but in JSX format we use className.
    -You can do control+F to change the words from className to className.

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








  
function Template() { 



//Below are JS functions for button sending radio button selection to back end with Submit button

const [radioButtons, setRadioButtons] = useState(null)

const handleSubmit = (event) => {
  event.preventDefault();
  console.log({
    radioButtons
  });
}

const handleRadioChange = (event) => { 
  setRadioButtons(event.target.value);
};



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
  </> 
 );
};
export default Template;  


                      {/* <div className="col-md-6 text-left py-2">----->THIS CODE WAS COMMENTED OUT BECAUSE IT WAS UNECESSARY
                        <label for="your-subject" className="form-label">Select Courses</label>
                        <div>
                        <select className="selectpicker" data-show-subtext="false" data-live-search="true" style={{width:"100%", height:"2rem"}} required>
                          <option value="">-</option>
                          <option>first</option>
                          <option>second</option>
                          <option>third</option>
                          <option>fourth</option>
                          <option>fifth</option>
                          <option>sixth</option>
                          <option>seventh</option>
                        </select>
                        </div>
                      </div> */}

                      

                      {/* Trying to make the dropdown checkboxes for muliple selection */}
                      {/* <select
                        options={competitionOptions}
                        value={selectedCompetitionOptions}
                        onChange={setSelectedCompetitionOptions}
                        isMulti
                      />
                      <label>
                        Selected Options:{selectedCompetitionOptions.map((competitionOptions) => (
                          <span key={competitionOptions.value} > {competitionOptions.label},</span>
                        ))}
                      </label> */}

                      {/*tyring to mix select with checkboxes */}
                      {/* <div class="multiselect">
                        <div class="selectBox" onClick={showCompetitionCheckBoxes()}>
                          <select>
                            <option>Select a Competition</option>
                          </select>
                          <div class="overSelect"></div>
                        </div>
                        <div id='competitionCheckboxes'>
                          <label htmlFor="ConcreteCanoeID" className="form-control"></label>
                          <input type="checkbox" id="ConcreteCanoeID">Concrete Canoe</input>
                          
                          <label htmlFor="SteelBridgeID" className="form-control"></label>
                          <input type="checkbox" id="SteelBridgeID">Steel Bridge</input>

                          <label htmlFor="TimberStrongId" className="form-control"></label>
                          <input type="checkbox" id="TimberStrongID">Timber Strong</input>

                        </div>
                      </div> */}

                      {/* I decided that it would be best to implement a selection based on multiple checkboxes */}
                      
                    



{/* <div className="col-lg-9">
<h1 className="mb-3">Sign Up for competitions</h1>

<form onSubmit={handleSubmit}>
  <div className="row g-3">
    <div className="col-md-12 text-center py-5"> {/*First question */}
      // <label for="ascemember" className="form-label">Are you member of the official ASCE organization?</label>
      //   <div className="row">
      //     <div className="col-sm-6">
          
      //       <input 
      //         type="radio" 
      //         id="asceMemberYes" 
      //         name="RadioSetOne" 
      //         value="Yes" 

      //       checked={radioButtons === 'Yes'}

      //       onChange={handleRadioChange}

            

      //       required/>
      //       <label>Yes</label>

      //     </div>
      //     <div className="col-sm-6">
      //       <input 
      //         type="radio" 
      //         id="asceMemberNO" 
      //         name="RadioSetOne" 
      //         value="No" 

      //         checked={radioButtons === 'No'}
      //         onChange={handleRadioChange}
              
      //       required/>
      //       <label>No</label>
      //     </div>
      //   <p>{radioButtons}</p>
      // </div>
    // </div> 


// <div className="col-md-6 text-left py-2"> {/*Second Question */}
// <label for="your-name" className="form-label">Name</label>
// <input type="text" placeholder="Name Lastname" className="form-control" id="your-name" name="your-name" required/>
// </div>

// <div className="col-md-6 text-left py-2"> {/*Third Question */}
// <label for="your-email" className="form-label" id="email-label">Email</label>
// <input 
//   type="email" 
//   placeholder="name@students.pupr.edu or name@pupr.edu" 
//   className="form-control" 
//   id="your-email" 
//   name="your-email" 
//   // emailValidate={value={email}}
                                                     
//   required/>
 
  
// </div>

// <div className="col-md-6 text-left py-2"> {/*Fourth Question */}
// <label for="your-phone" className="form-label">Phone</label>
// <input type="phone" placeholder="(787 or 939)-###-####" className="form-control" id="your-phone" name="your-phone" required/>
// </div>

// <div className="col-md-6 text-left py-2"> {/*Fifth Quesiton */}
// <label for="your-phone" className="form-label">ASCE Membership Number</label>
// <input type="text" placeholder="##########" className="form-control" id="your-number" name="your-number" aria-labelledby="ASCEMembershipNumberHelp" required/>
//   <div id='ASCEMembershipNumberHelp' class='form-text' className='help-block'>
//   Become a member of the Official ASCE at: https://www.asce.org/membership
//   </div>
// </div>


{/* <div className="col-md-12 text-center py-2"> 
                        <label for="your-subject" className="form-label">Select Competition of interest</label>
                        <div>
                        <select className="selectPicker" isMulti data-show-subtext="false" data-live-search="true" style={{width:"100%", height:"2rem"}} required>
                        <option value="">Select</option>
                        <option value="1">Concrete Canoe</option>
                        <option value="2">Steel Bridge</option>
                        <option value="3">Timber Strong</option>
                        <option value="4">Sustainable Solutions</option>
                        <option value="5">Innovation Contest</option>
                        <option value="6">Construction Institute</option>
                        <option value="7">Surveying</option>
                        <option Value="8">Concrete Bridge</option>
                        <option Value="9">Traffic Control</option>
                        <option Value="10">Geo-Wall</option>
                        <option Value="11">Muddy Waters</option>
                        <option Value="12">Concrete Cornhole</option>
                        <option Value="13">Plans Reading</option>
                        <option Value="14">Professional Paper</option>
                        <option Value="15">T-shirt Contest</option>
                        <option Value="16">Mystery Competition</option>
                        </select>
                        </div>
                      </div>  */}

{/* <div className="col-md-12 text-center py-2">
                        <label htmlFor="your-subject" className="form-check-label">Select one or more Competitions</label>
                        <Form.Group FromControlId='competitionsCheckBoxGroup' className="text-center" required>
                          <div className="row">
                            <Form.Check label = "Concrete Canoe"  type = "checkbox"  id = "ConcreteCanoeID"/>
                            <Form.Check label = "Steel Bridge"  type = "checkbox"  id = "SteelBridgeID"/>
                            <Form.Check label = "Timber Strong"  type = "checkbox"  id = "TimberStrongID"/>
                            <Form.Check label = "Sustainable Solutions"  type = "checkbox"  id = "SustainableSolutionsID"/>
                            <Form.Check label = "Innovation Contest"  type = "checkbox"  id = "InnovationContestID"/>
                            <Form.Check label = "Construction Institute"  type = "checkbox"  id = "ConstructionInstituteID"/>
                            <Form.Check label = "Surveying"  type = "checkbox"  id = "SurveyingID"/>
                            <Form.Check label = "Concrete Bridge"  type = "checkbox"  id = "ConcreteBridgeID"/>
                          </div>
                          <div className="row">
                            <Form.Check label = "Traffic Control"  type = "checkbox"  id = "TrafficControlID"/>
                            <Form.Check label = "Geo-Wall"  type = "checkbox"  id = "Geo-WallID"/>
                            <Form.Check label = "Muddy Waters"  type = "checkbox"  id = "MuddyWatersID"/>
                            <Form.Check label = "Concrete Cornhole"  type = "checkbox"  id = "ConcreteCornholeID"/>
                            <Form.Check label = "Plans Reading"  type = "checkbox"  id = "PlansReadingID"/>
                            <Form.Check label = "Professional Paper"  type = "checkbox"  id = "ProfessionalPaperID"/>
                            <Form.Check label = "T-Shirt Contest"  type = "checkbox"  id = "T-ShirtContestID"/>
                            <Form.Check label = "Mystery Competition"  type = "checkbox"  id = "MysteryCompetitionID"/>
                          </div>
                        </Form.Group>
                      </div>

                     
                      <div className="col-12 text-center py-3"> {/*Seventh Question */}
                      //   <label for="your-message" className="form-label">Write 3 recent courses taken</label>
                      //   <textarea placeholder="At least 3 of the most recent courses taken in the University"  style={{resize:"none"}} className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                      // </div>
                      // <div className="col-12 text-center py-3"> {/*Eighth Question */}
                      //   <label for="your-message" className="form-label">Write recent experiences</label>
                      //   <textarea placeholder="At least 3 of the top recent experiences, can be projects or work or intern experiences"  style={{resize:"none"}} className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                      // </div>

                      // <div className="col-12 text-center py-3"> {/*Ninth Question */}
                      //   <label for="your-message" className="form-label">Please add your hourly availability</label>
                      //   <textarea placeholder="Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday"  style={{resize:"none"}} className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                      // </div>


                      // <div className="col-md-12 text-center py-5"> {/*Tenth Question */}
                      // <label for="ascemember" className="form-label">Are you willing to travel?</label>
                      // <div className="row">
                      //   <div className="col-sm-6">
                      //     <input 
                      //       type="radio" 
                      //       id="TravelQuestion" 
                      //       name="RadioSetTwo" 
                      //       value="Yes"
                            
                      //       checked={radioButtons === "Yes"}
                      //       onChange={handleRadioChange}
                      //     />
                      //     <label>Yes</label>
                      //   </div>
                        
                      //   <div className="col-sm-6">
                      //     <input 
                      //       type="radio" 
                      //       id="TravelQuestion" 
                      //       name="RadioSetTwo" 
                      //       value="No"

                      //       checked={radioButtons === 'No'}
                      //       onChange={handleRadioChange}
                      //     />
                      //     <label>No</label>
                      //   </div>
                      //   <div>
                      //   <p>{radioButtons}</p>
                      //   </div>
                      // </div>
                      // </div>
                      
                      // <div className="col-md-12 text-center py-5"> {/*Eleventh Question */}
                      //   <label for="ascemember" className="form-label">Are you willing to travel in June?</label>
                      //   <div className="row">
                      //     <div className="col-sm-6">
                      //     <input 
                      //       type="radio"
                      //       id="JuneTravelQuestion" 
                      //       name="RadioSetThree" 
                      //       value="Yes"

                      //       checked={radioButtons === "Yes"}
                      //       onChange={handleRadioChange}
                      //     />
                      //     <label>Yes</label>
                      //     </div>
                      //     <div className="col-sm-6">
                      //       <input type="radio" 
                      //         id="JuneTravelQuestion" 
                      //         name="RadioSetThree" 
                      //         value="No"
                              
                      //         checked={radioButtons === 'No'}
                      //         onChange={handleRadioChange}
                      //         />
                      //       <label>No</label>
                      //     </div>
                      //   </div>
                      //   <p>{radioButtons}</p>
                      // </div>

                      // <div className="col-md-12 text-center py-5"> {/*Twelfth Quesiton */}
                      //   <label for="ascemember" className="form-label">Are you older than 25?</label>
                      //   <div className="row">
                      //     <div className="col-sm-6">
                      //       <input type="radio" 
                      //         id="TwentyFiveYearOldQuestion" 
                      //         name="RadioSetFour" 
                      //         value="Yes"
                              
                      //         checked={radioButtons === "Yes"}
                      //         onChange={handleRadioChange}
                      //         />
                      //       <label>Yes</label>
                      //     </div>
                      //     <div className="col-sm-6">
                      //       <input type="radio" 
                      //       id="TwentyFiveYearOldQuestion" 
                      //       name="RadioSetFive" 
                      //       value="No"
                            
                      //       checked={radioButtons === 'No'}
                      //       onChange={handleRadioChange}
                      //       />
                      //       <label>No</label>
                      //     </div>
                      //   </div>
                      //   <p>{radioButtons}</p>
                      // </div>

                      // <div className="col-md-12 text-center py-5"> {/*Thirdteenth Question */}
                      //   <label for="ascemember" className="form-label">Do you have a heavy vehicle license?</label>
                      //   <div className="row">
                      //     <div className="col-sm-6">
                      //       <input type="radio" 
                      //       id="html" 
                      //       name="RadioSetSix" 
                      //       value="Yes"
                            
                      //       checked={radioButtons === "Yes"}
                      //       onChange={handleRadioChange}
                      //       />
                      //       <label>Yes</label>
                      //     </div>
                      //     <div className="col-sm-6">
                      //       <input type="radio" 
                      //       id="html" 
                      //       name="RadioSetSix" 
                      //       value="No"
                            
                      //       checked={radioButtons === 'No'}
                      //       onChange={handleRadioChange}
                      //       />
                      //       <label>No</label>
                      //     </div>
                      //   </div>
                      //   <p>{radioButtons}</p>
                      // </div>

                      // <div className="col-lg-12 py-2">
                      // <button data-res="<?php echo $sum; ?>" type="submit" class="btn btn-primary w-50 fw-bold" >Submit</button> {/* <Button>Submit</Button> fw-bold*/}
                      // </div> */}


            
            
          // BELOW THIS LINE IS EVEN OLDER CODE AND ABOVE THIS SAME LINE IS MORE RECENT CODE
        


          {/* IM REBUILDING THE FORM THAT IS BELOW TO THE FORM THAT IS ABOVE. REMBER THE CLOSING DIV FOR <DIV CLASSNAME='CIMPETITIONFORM' */}



          {/* <div className="row justify-content-center my-5">
                <div className="col-lg-8 ms-lg-4">
                  <form className="row g-4 needs-validation" noValidate> */}
                    {/* First Question  WHAT IS YOUR FIRST AND LAST NAME?*/}
                    
                    {/* <div className="mb-3 mx-5 row g-3"> {/*row g-3 */}
                      {/* <div className="col-md-12">
                      <label for="exampleFormControlTextarea1" className="form-label">1. Please enter your first and last name.</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                      </div>  */}
                      {/* <div className="valid-feedback">Perfect</div> */}
                    {/* </div> */}


                    {/* Second Question WHAT US YOUR STUDENT EMAIL? */}
                    {/* <div className="col-md-6"> {/*col-md-6 added */}
                      {/* <label for="emailQuestion" className="form-label">2. Please enter your PUPR student email address.</label>
                      <input type="email" className="form-control" id="emailQuestion" placeholder="lastname_studentnumber@students.pupr.edu" required/>
                    </div>


                    <div className="row"> */}
                    {/* Third question Below */}
                    {/* <div className="col-6"> row ; deleted mb-6 mx-5 g-3 */}
                        {/* <div className="col-6">
                          <label htmlFor="ASCEMemberRadioQuestion" className="form=label">3. Are you an ASCE Member?</label>
                        </div>
                        <div className="col-6">
                          <div className="row g-3">
                            <div className="col-12 col-md-6">
                              <div className="form-check">
                                <input className = "form-radio-input" type="radio" name="FirstRadio" id="ASCEMemberRadioQuestion"/>
                                <label htmlFor="ASCEMemberRadioQuestion" className="form-label">Yes</label> */}
                                {/* </input> */}
                              {/* </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-check">
                                <input className = "form-radio-input" type="radio" name="FirstRadio" id="ASCEMemberRadioQuestion"/>
                                <label htmlFor="ASCEMemberRadioQuestion" className="form-label">No</label>
                                {/* </input> */}
                              {/* </div>
                            </div>
                          </div>
                        </div>
                      </div>  */}
                    
                    {/* Fourth quesiton below */}
                    {/* <div className="col-6 col-md-6"> mb-3 was only here */}
                    
                      {/* <label htmlFor="ASCEMemberNumber" className="form-label">4. ASCE Member Number</label> */}
                      {/* <textarea className="form-control" id="ASCEMemberNumber" rows="1"></textarea>  THIS MIGHT BE THE CORRECT CODE FOR THIS QUESTION IN THE FORM INSTEAD OF LINES 214 TO 217*/}
                      {/* <input type="text" className="form-control" id="ASCEMemberNumber" aria-describedby="memberNumberHelp"></input>
                      <div id="memberNumberHelp" className="form-text">
                        If you do not have an ASCE Member Number, then please become an official ASCE Member at https://www.asce.org/membership
                      </div>
                    
                    </div>
                    </div> */}

                    {/* Fifth question Below  */}
                    {/* <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="competitionsDropdown" className="form">5. Select the competitions you are interested in participating.</label>
                      <select>
                        <option value="1">Concrete Canoe</option>
                        <option value="2">Steel Bridge</option>
                        <option value="3">Timber Strong</option>
                        <option value="4">Sustainable Solutions</option>
                        <option value="5">Innovation Contest</option>
                        <option value="6">Construction Institute</option>
                        <option value="7">Surveying</option>
                        <option value="8">Concrete Bridge</option>
                        <option value="9">Traffic Control</option>
                        <option value="10">Geo-Wall</option>
                        <option value="11">Muddy Waters</option>
                        <option value="12">Concrete Cornhole</option>
                        <option value="13">Plans Reading</option>
                        <option value="14">Professional Paper</option>
                        <option value="15">T-Shirt Contest</option>
                        <option value="16">Mystery Competition</option>
                      </select>
                    </div> */}


                    {/* Sixth Question */}
                    {/* <div className="col-6 mb-3">
                      <label htmlFor="recentClassesQuesiton" className="form-label">6. Please write 3 or more of the most recent courses you have taken. Current Courses count.</label>
                      <textarea className="form-control" id="recentClassesQuestion" rows="3"></textarea>
                    </div>
                    </div> */}

                    {/* Seventh Question */}
                    {/* <div className="mb-3">
                      <label htmlFor="experienceQuesiton" className="form-label">7. Please write any experience current or past that you have aquired such as Jobs, Internships, Consturction Knowledge, etc.</label>
                      <textarea className="form-control" id="experienceQuestion" rows="3"></textarea>
                    </div> */}

                    

                    {/* Eighth Question */}
                    {/* <div className='row mb-3'>
                      <div className='col-12'>
                        <p>8. Please give your availability.</p>
                      </div> */}

                    {/* <div className="col-12"> */}
                      {/* <div className='col-6'>
                        <label htmlFor="availability" className="form-label">Monday </label>
                        <input type="time" id="availability"></input>
                      </div> */}

                      {/* <div className='col-6'>
                        <label htmlFor="availability" className="form-label">Thursday</label>
                        <input type="time" id="availability"></input>
                      </div> */}

                      {/* <div className='col-6'>
                        <label htmlFor="availability" className="form-label">Tuesday </label>
                        <input type="time" id="availability"></input>
                      </div> */}
                    {/* </div> */}

                    {/* <div className='col-12'> */}
                      {/* <div className='col-6'>
                        <label htmlFor="availability" className="form-label">Friday</label>
                        <input type="time" id="availability"></input>
                      </div>

                      <div className='col-6'>
                        <label htmlFor="availability" className="form-label">Wednesday </label>
                        <input type="time" id="availability"></input>
                      </div>

                      <div className='col-6'>
                        <label htmlFor="availability" className="form-label">Saturday</label>
                        <input type="time" id="availability"></input>
                      </div>
                      
                    </div> */}
                    

                    {/* Ninth Question */}
                    

                      {/* <div className="row col-12">
                        <div className='col-6'> */}
                          {/* <div className='col-6'> Div for the label */}
                            {/* <label htmlFor="travelGeneralQuestion" className="form=label">9. Are you willing to travel?</label>                   
                          </div> */}
                          
                          {/* <div className='row col-6'> div that houses both radio buttons for this question */}
                            {/* <div className='col-6'>
                              <div className='col-3'>
                                <div className="form-check">
                                  <input className = "form-radio-input" type="radio" name="SecondRadio" id="tavelGeneralQuestion"/>
                                  <label htmlFor="travelGeneralQuestion" className="form-label">Yes</label>
                                </div>
                              </div>
                            </div>
                           
                            <div className='col-6'>  
                              <div className='col-3'>
                                <div className="form-check">
                                  <input className = "form-radio-input" type="radio" name="SecondRadio" id="travelGeneralQuestion"/>
                                  <label htmlFor="travelGeneralQuestion" className="form-label">No</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        


                          {/* Tenth Question */}
                          
                            {/* <div className="col-6">
                              <div className='col-6'>
                                <label htmlFor="juneTravelQuestion" className="form=label">10. Are you willing to travel in June?</label>
                              </div>
                            
                              <div className="row col-6">
                                <div className='col-6'>
                                  <div className='col-3'>
                                    <div className="form-check">
                                      <input className = "form-radio-input" type="radio" name="ThirdRadio" id="juneTravelQuestion"/>
                                      <label htmlFor="juneTravelQuestion" className="form-label">Yes</label>
                                      </input> */}
                                    {/* </div>
                                  </div>
                                </div>
                              
                                <div className="col-6">
                                  <div className='col-3'>
                                    <div className="form-check">
                                      <input className = "form-radio-input" type="radio" name="ThirdRadio" id="juneTravelQuestion"/>
                                      <label htmlFor="juneTravelQuestion" className="form-label">No</label>
                                      /* </input> */}
                                     {/* </div>
                                   </div>
                                 </div>
                               </div>
                          
                           </div>
                     </div> */}


                    {/* Eleventh Question */}
                    {/* <div className='row col-12'>
                      <div className='col-6'>
                        <div className="col-6">
                        <label htmlFor="ageTwentyFiveQuestion" className="form=label">11. Are you 25 yeard old or older?</label>
                        </div>
                        
                        <div className="row col-6">
                          <div className='col-6'>
                            <div className='col-3'>
                              <div className="form-check">
                                <input className = "form-radio-input" type="radio" name="FourthRadio" id="ageTwentyFiveQuestion"/>
                                <label htmlFor="ageTwentyFiveQuestion" className="form-label">Yes</label>
                              </div>
                            </div>
                          </div>
                       
                          <div className="col-6">
                            <div className='col-3'>
                              <div className="form-check">
                                <input className = "form-radio-input" type="radio" name="FourthRadio" id="ageTwentyFiveQuestion"/>
                                <label htmlFor="ageTwentyFiveQuestion" className="form-label">No</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     */}


                      {/* Twelfth Question */}
                      {/* <div className="col-6">
                        <div className="col-6">
                          <label htmlFor="heavyVehicleLicenseQuestion" className="form=label">12. Do you have a heavy vehicle license?</label>
                        </div>
                        
                        <div className="row col-6">
                          <div className='col-6'>
                            <div className='col-3'>
                              <div className="form-check">
                                <input className = "form-radio-input" type="radio" name="FifthRadio" id="heavyVehicleLicenseQuestion"/>
                                <label htmlFor="heavyVehicleLicenseQuestion" className="form-label">Yes</label>
                              </div>
                            </div>
                          </div>
                        

                          <div className="col-6">
                            <div className='col-3'>
                              <div className="form-check">
                                <input className = "form-radio-input" type="radio" name="FifthRadio" id="heavyVehicleLicenseQuestion"/>
                                <label htmlFor="heavyVehicleLicenseQuestion" className="form-label">No</label>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    
                    



                    {/* Thirdteenth Question */}
                    {/* <div className="col-md-12 text-center">
                      <label for="ascemember" className="form-label">13. Would you like to be the official driver of the PUPR ASCE Student Chapter?</label>
                        <div className="row">
                          <div className="col-sm-6">
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                            <label for="yes">Yes</label>
                          </div>
                          
                          <div className="col-md-12 text-center">
                            <label for="ascemember" className="form-label">Are you member of the official ASCE organization?</label>
                              <div className="row">
                              <div className="col-sm-6">
                              <input type="radio" id="html" name="fav_language" value="HTML"/>
                              <label for="yes">Yes</label> 
                              </div>
                              
                              <div className="col-sm-6">
                              <input type="radio" id="html" name="fav_language" value="HTML"/>
                              <label for="no">No</label><br></br>
                              </div>
                            </div>
                            </div>
                    </div>
                    <Button>Submit</Button>

                    </div> */}

                  {/* </form> */}
                
                
             