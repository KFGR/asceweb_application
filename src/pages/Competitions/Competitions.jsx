import "./Competitions.css";
import React from "react";
import ContentCard from "../../components/ContentCard";
import { Image } from "react-bootstrap"; //Calling the Image object, this object is already responsive
import imagename from '../../assets/Brand/Award.png'; //anothe method to call images, but you initialize the viewport

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

      <div class="container">
        <div class = "row">
            <div class = "col-12 col-lg-3">
        
            {/* Concrete Canoe */}
            <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "Concrete Canoe"
              paragraph = "Details"
            />
          </div>

          <div class = "col-12 col-lg-3">
            {/* Steele Bridge */}
            <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "Steele Bridge"
              paragraph = "Details"
            />
          </div>
        

            
          <div class = "col-12 col-lg-3">
            {/* Timber Strong */}
            <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "Timber Strong"
              paragraph = "Details"
            />
            </div>
          

          <div class = "col-12 col-lg-3">
            {/* Sustaible Solutions */}
            <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "Sustainable Solutions"
              paragraph = "Details"
            />
          </div>
          <div class ="col-12 col-md-2">
            {/* hidden card for aesthetics */}
            <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "HIDE THIS"
              paragraph = "Details"
            />

          </div>

          <div class = "col-12 col-md-2">
            {/* Innovation Contest */}
            <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "Innovation Contest"
              paragraph = "Details"
            />
          </div>

          <div class = "col-12 col-md-2">
            {/* Surveying */}
            <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "Surveying"
              paragraph = "Details"
            />
          </div>

          <div class = "col-12 col-md-2">
              {/* Construction Institute */}
              <ContentCard id="competition_card"
              imageSrc={imagename}
              imageAlt="none"
              title = "Construction Institute"
              paragraph = "Details"
              />
          
            </div>
            </div>
          </div>

   
      
      
      

        <section>
          <div className="container-fluid">
           <div className="col-12">
           <div className="container" style={{display:'flex!important'}}>
              <div className="row">
              
                <div className="col-lg-6">
                  <Image src={require("../../assets/Brand/Award.png")} alt="" width={500} height={500} style={{width:'100%', height:'auto'}}/>
                </div>
                <div className="col-lg-6">
                  <img className="rounded-lg-3" src={imagename} alt="" width="800"/>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </section>
        </div>
    
  );
};
export default template;

       /* 
       
        THIS IS ALL THE CODE DONE BETWEEN THE NIGHTS OF FRIDAY 7 AND SATURDAY 8. THIS WAS REWORKED ABOVE
        WITH CONTAINERS TO MAKE THE CODE REUSABLE AND LESS RESOURCE INTENSIVE.(MODAY APRIL 10)

          { </div>
          <div class = "col-12 col-lg-3">
        <ContentCard id="competition_card"
          imageSrc={imagename}
          imageAlt="none"
        />
         
          
          <div class = "col-12 col-lg-3">
            <div class ="card text-center h-100 mb-2">
              <Image  src={require("../../assets/Brand/ConcreteCanoe.png")} alt="" style={{width:'100', height:'auto'}}/>
              
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h2>Concrete Canoe</h2>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          
          <div class = "col-12 col-lg-3">
            <div class ="card text-center h-100 mb-2">
            <Image  src={require("../../assets/Brand/SteeleBridge.png")} alt="" style={{width:'100', height:'auto'}}/>
             
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h3>Steele Bridge</h3>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          
          <div class = "col-12 col-lg-3">
            <div class ="card text-center p-3 mb-2 h-100 mb-3">
              
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h4>Timber Strong</h4>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          
          <div class = "col-12 col-lg-3">
            <div class ="card text-center p-3 mb-2 h-100 mb-3">
            <Image  src={require("../../assets/Brand/SustainableSolutions.png")} alt="" style={{width:'100', height:'auto'}}/>
              
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h5>Sustainable Solutions</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          <div class = "col-12 col-lg-4">
            <div class ="card text-center  mt-2">
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h6>Innovation Contest</h6>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          
          <div class = "col-12 col-lg-4">
            <div class ="card text-center  mt-2">
            <Image  src={require("../../assets/Brand/Surveying.png")} alt="" style={{width:'100', height:'auto'}}/>
              <img src ="Surveying.png" alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h7>Surveying</h7>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          
          <div class = "col-12 col-lg-4">
            <div class ="card text-center p-2 mt-2">
            <Image  src={require("../../assets/Brand/ConstructionInstitute.png")} alt="" style={{width:'100', height:'auto'}}/>
               <img src ="Construction Institute.png" alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h8>Construction Institute</h8>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

        </div>
        
  </div> }*/
     