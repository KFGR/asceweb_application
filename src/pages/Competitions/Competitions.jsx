import "./Competitions.css";
import React from "react";
import ContentCard from "../../components/ContentCard";
// import { Image } from "react-bootstrap"; //Calling the Image object, this object is already responsive
import imagename from '../../assets/Brand/Award.png'; //anothe method to call images, but you initialize the viewport
import Calendar from "../../components/Calendar";
  // import Select from  'react-select';
  // import 'react-select/dist/react-select.css';

import { Form } from 'react-bootstrap';
import { useState } from "react";




// images for Competitions in Modals
import canoeImage from '../../assets/Brand/ConcreteCanoe.png'
import steeleBridgeImage from '../../assets/Brand/SteeleBridge.png'
import sustainableImage from '../../assets/Brand/SustainableSolutions.png'
import surveyingImage from '../../assets/Brand/Surveying.png'
import constructionInstiImage from '../../assets/Brand/ConstructionInstitute.png'
import innovationImage from '../../assets/Brand/InnovationContest.jpg'

//Images for Competitions in cards
import smallConcreteImage from '../../assets/Brand/SmallConcreteCanoe.jpg'
import smallSteelImage from '../../assets/Brand/SmallSteelBridge.jpg'
import smallSurveyingImage from '../../assets/Brand/SmallSurveying.jpg'
import smallTimberStrongImage from '../../assets/Brand/SmallTimberStrong.jpg'
import smallSustainableSolutionsImage from '../../assets/Brand/SmallSustainableSolutions.jpg'
import smallInnovationContestImage from '../../assets/Brand/SmallInnovationContest.jpg'

  
function Template() { 

  

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
    
    <div className="Competitions">
      
      <h1>Competitions</h1>
      <p>These are the top ASCE Competitions, celebrated annually.</p>
      
      

      <div className="container">
        <div className = "row">
          <div className = "col-12 col-lg-3">
        
            {/* Concrete Canoe */}
            <div className="container">
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
          </div>

          <div className = "col-12 col-lg-3">
            <div className="container">
            {/* Steele Bridge */}
            <ContentCard id="competition_card"
              imageSrc={smallSteelImage}
              imageAlt="none"
              title = "Steel Bridge"
              // paragraph = "Details"
              modalTitle = "Steel Bridge"
              competitionDescription = "The Student Steel Bridge Competition challenges students to extend their classroom knowledge to a practical and hands-on steel-design project that grows their interpersonal and professional skills, encourages innovation, and fosters impactful relationships between students and industry professionals.  Each student team develops a concept for a scale-model steel bridge to span approximately 20 feet and to carry 2,500 pounds according to the competition rules. The team must determine how to fabricate their bridge and then plan for an efficient assembly under timed construction conditions at the competition. Bridges are also load-tested, weighed, and judged on aesthetics."
              modalImage = {steeleBridgeImage}
              
            />
            </div>
          </div>


          <div className = "col-12 col-md-3">
              {/* Surveying */}
              <ContentCard id="competition_card"
              imageSrc={smallSurveyingImage}
              imageAlt="none"
              title = "Surveying"
              // paragraph = "Details"
              modalTitle = "Surveying"
              competitionDescription = "The ASCE UESI Surveying Competition’s educational and professional goals include a recognition of the importance of basic surveying principles to all civil engineering projects. Students will be required to use standard field and office equipment and procedures to solve common problems encountered in industry. A clear understanding of and ability to apply basic surveying principles will assist the graduate civil engineer in communicating and working with the surveying professionals on the job site and during the design process."
              modalImage = {surveyingImage}
              />
            </div>

              <div className = "col-12 col-md-3">
                {/* Construction Institute - PLACE THE CONSTRUCTION INSTITUTE IMAGE IN THE TIMBER STRONG IMAGE */}
                <ContentCard id="competition_card"
                imageSrc={imagename}
                imageAlt="none"
                title = "Construction Institute"
                // paragraph = "Details"
                modalTitle = "Construction Institute"
                competitionDescription = "Each student team shall act as a construction engineering firm, and these responses shall be directed and delivered professionally, similarly to how a real company would address an owner requesting additional information from a firm during the pre-construction phase of a job. Sample projects will entertain all sectors of civil engineering, while the individual challenges will be related to: Traffic Control / Site Logistics, QA/QC, Safety, Public Outreach, Environment, Risk Management, and other concerns that project managers and engineers plan for."
                modalImage = {imagename}
                />
          
              </div>
        

            
          <div className = "col-12 col-lg-3">
            {/* Timber Strong */}
            <ContentCard id="competition_card"
              imageSrc={smallTimberStrongImage}
              imageAlt="none"
              title = "Timber Strong"
              // paragraph = "Details"
              modalTitle ="Timber Strong"
              competitionDescription = "The competition seeks student teams to design and build an artistically creative 2-story wood light-framed building that is sustainable, aesthetically pleasing and structurally durable. The competition enables students to gain experience in performing aspects of common structural engineering design and practice as well as gain exposure to the management and building practices used in construction environments."
              modalImage = {constructionInstiImage}
            />
            </div>
          

          <div className = "col-12 col-lg-3">
            {/* Sustaible Solutions */}
            <ContentCard id="competition_card"
              imageSrc={smallSustainableSolutionsImage}
              imageAlt="none"
              title = "Sustainable Solutions"
              // paragraph = "Details"
              modalTitle = "Sustainable Solutions"
              competitionDescription = "The ASCE Sustainable Solutions Competition challenges students to develop a stronger understanding of sustainability and learn to incorporate sustainable solutions into everyday problems that engineers incur. Students are encouraged to be creative in their solutions and use all resources available."
              modalImage = {sustainableImage}
            />
          </div>
          
          <div className = "col-12 col-md-3">
            {/* Innovation Contest */}
            <ContentCard id="competition_card"
              imageSrc={smallInnovationContestImage}
              imageAlt="none"
              title = "Innovation Contest"
              // paragraph = "Details"
              modalTitle = "Innovation Contest"
              competitionDescription = "Participating teams will develop and pitch their innovation to the judges and at a minimum provide proof-of-concept for its feasibility and innovative potential. The closer your innovation is to having a proof of concept and a business plan, the more persuasive the result. The mission of the 2023 ASCE Innovation Contest is to develop an innovation that addresses one of the following three ASCE Report Card topics: Drinking Water, Energy, and Roads."
              modalImage = {innovationImage}
            />
          </div>
          
          <div className='mt-5' style={{fontSize:"small"}}>
            <p>Other competitions aren't celebrated annually, rather the official ASCE decides which of these take place in a given year. These competitions are: Concrete Bridge, Traffic Control, Geo-Wall, Muddy Waters, Concrete Cornhole, Plans Reading, Professional Paper, T-shirt Contest, and Mystery Competiton.</p>
          </div>
            
          </div>
        </div>
        



         <section style={{paddingBottom:"3%", backgroundColor:"#FFC107", color:"black"}}>
            <div className="container my-5">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h1 className="mb-3">Sign Up for competitions</h1>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-12 text-center py-5"> {/*First question */}
                        <label for="ascemember" className="form-label">Are you member of the official ASCE organization?</label>
                          <div className="row">
                            <div className="col-sm-6">
                            
                              <input 
                                type="radio" 
                                id="asceMemberYes" 
                                name="RadioSetOne" 
                                value="Yes" 

                              checked={radioButtons === 'Yes'}

                              onChange={handleRadioChange}

                              

                              required/>
                              <label>Yes</label>

                            </div>
                            <div className="col-sm-6">
                              <input 
                                type="radio" 
                                id="asceMemberNO" 
                                name="RadioSetOne" 
                                value="No" 

                                checked={radioButtons === 'No'}
                                onChange={handleRadioChange}
                                
                              required/>
                              <label>No</label>
                            </div>
                          <p>{radioButtons}</p>
                        </div>
                      </div>

                      <div className="col-md-6 text-left py-2"> {/*Second Question */}
                        <label for="your-name" className="form-label">Name</label>
                        <input type="text" placeholder="Name Lastname" className="form-control" id="your-name" name="your-name" required/>
                      </div>

                      <div className="col-md-6 text-left py-2"> {/*Third Question */}
                        <label for="your-email" className="form-label" id="email-label">Email</label>
                        <input 
                          type="email" 
                          placeholder="name@students.pupr.edu or name@pupr.edu" 
                          className="form-control" 
                          id="your-email" 
                          name="your-email" 
                          // emailValidate={value={email}}
                                                                             
                          required/>
                         
                          
                      </div>

                      <div className="col-md-6 text-left py-2"> {/*Fourth Question */}
                        <label for="your-phone" className="form-label">Phone</label>
                        <input type="phone" placeholder="(787 or 939)-###-####" className="form-control" id="your-phone" name="your-phone" required/>
                      </div>

                      <div className="col-md-6 text-left py-2"> {/*Fifth Quesiton */}
                        <label for="your-phone" className="form-label">ASCE Membership Number</label>
                        <input type="text" placeholder="##########" className="form-control" id="your-number" name="your-number" aria-labelledby="ASCEMembershipNumberHelp" required/>
                          <div id='ASCEMembershipNumberHelp' className='form-text' class='help-block'>
                          Become a member of the Official ASCE at: https://www.asce.org/membership
                          </div>
                      </div>


                      <div className="col-md-12 text-center py-2"> {/*Sixth Question */}
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
                      </div>

                      {/* I decided that it would be best to implement a selection based on multiple checkboxes */}
                      <div className="col-md-12 text-center py-2">
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
                        <label for="your-message" className="form-label">Write 3 recent courses taken</label>
                        <textarea placeholder="At least 3 of the most recent courses taken in the University"  style={{resize:"none"}} className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                      </div>
                      <div className="col-12 text-center py-3"> {/*Eighth Question */}
                        <label for="your-message" className="form-label">Write recent experiences</label>
                        <textarea placeholder="At least 3 of the top recent experiences, can be projects or work or intern experiences"  style={{resize:"none"}} className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                      </div>

                      <div className="col-12 text-center py-3"> {/*Ninth Question */}
                        <label for="your-message" className="form-label">Please add your hourly availability</label>
                        <textarea placeholder="Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday"  style={{resize:"none"}} className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                      </div>


                      <div className="col-md-12 text-center py-5"> {/*Tenth Question */}
                      <label for="ascemember" className="form-label">Are you willing to travel?</label>
                      <div className="row">
                        <div className="col-sm-6">
                          <input 
                            type="radio" 
                            id="TravelQuestion" 
                            name="RadioSetTwo" 
                            value="Yes"
                            
                            checked={radioButtons === "Yes"}
                            onChange={handleRadioChange}
                          />
                          <label>Yes</label>
                        </div>
                        
                        <div className="col-sm-6">
                          <input 
                            type="radio" 
                            id="TravelQuestion" 
                            name="RadioSetTwo" 
                            value="No"

                            checked={radioButtons === 'No'}
                            onChange={handleRadioChange}
                          />
                          <label>No</label>
                        </div>
                        <div>
                        <p>{radioButtons}</p>
                        </div>
                      </div>
                      </div>
                      
                      <div className="col-md-12 text-center py-5"> {/*Eleventh Question */}
                        <label for="ascemember" className="form-label">Are you willing to travel in June?</label>
                        <div className="row">
                          <div className="col-sm-6">
                          <input 
                            type="radio"
                            id="JuneTravelQuestion" 
                            name="RadioSetThree" 
                            value="Yes"

                            checked={radioButtons === "Yes"}
                            onChange={handleRadioChange}
                          />
                          <label>Yes</label>
                          </div>
                          <div className="col-sm-6">
                            <input type="radio" 
                              id="JuneTravelQuestion" 
                              name="RadioSetThree" 
                              value="No"
                              
                              checked={radioButtons === 'No'}
                              onChange={handleRadioChange}
                              />
                            <label>No</label>
                          </div>
                        </div>
                        <p>{radioButtons}</p>
                      </div>

                      <div className="col-md-12 text-center py-5"> {/*Twelfth Quesiton */}
                        <label for="ascemember" className="form-label">Are you older than 25?</label>
                        <div className="row">
                          <div className="col-sm-6">
                            <input type="radio" 
                              id="TwentyFiveYearOldQuestion" 
                              name="RadioSetFour" 
                              value="Yes"
                              
                              checked={radioButtons === "Yes"}
                              onChange={handleRadioChange}
                              />
                            <label>Yes</label>
                          </div>
                          <div className="col-sm-6">
                            <input type="radio" 
                            id="TwentyFiveYearOldQuestion" 
                            name="RadioSetFive" 
                            value="No"
                            
                            checked={radioButtons === 'No'}
                            onChange={handleRadioChange}
                            />
                            <label>No</label>
                          </div>
                        </div>
                        <p>{radioButtons}</p>
                      </div>

                      <div className="col-md-12 text-center py-5"> {/*Thirdteenth Question */}
                        <label for="ascemember" className="form-label">Do you have a heavy vehicle license?</label>
                        <div className="row">
                          <div className="col-sm-6">
                            <input type="radio" 
                            id="html" 
                            name="RadioSetSix" 
                            value="Yes"
                            
                            checked={radioButtons === "Yes"}
                            onChange={handleRadioChange}
                            />
                            <label>Yes</label>
                          </div>
                          <div className="col-sm-6">
                            <input type="radio" 
                            id="html" 
                            name="RadioSetSix" 
                            value="No"
                            
                            checked={radioButtons === 'No'}
                            onChange={handleRadioChange}
                            />
                            <label>No</label>
                          </div>
                        </div>
                        <p>{radioButtons}</p>
                      </div>

                      <div className="col-lg-12 py-2">
                      <button data-res="<?php echo $sum; ?>" type="submit" className="btn btn-primary w-50 fw-bold" >Submit</button> {/* <Button>Submit</Button> fw-bold*/}
                      </div>
                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </section>

        
        
        </div>

    <Calendar/>
  </> 
     
      
   
 );
};
export default Template;       