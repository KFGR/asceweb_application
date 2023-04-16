import "./ContentCard.css";
//import React, { useState } from "react";
import {Image} from "react-bootstrap";
//import { Dropdown, DropdownButton } from "react-bootstrap";
//import React, { useState } from "react";
import CardWithModal from "./Modal.jsx";


 function Template(props){
  //const CardWithModal = ({
    // id,
    // className,
    // imageSrc,
    // imageAlt,
    // title,
    // details,
    // modalDetails,
    // modalImage,
    // modalTitle,
    // paragraph}) =>{
       //const [showModal, setShowModal]= useState(false)
      
       //const handleClose = () => setShowModal(false);
       //const handleShow = () => setShowModal(true);

    const {id,className, imageSrc, imageAlt, title, paragraph, modalImage, modalTitle, competitionDescription} = props;

    // lines 29 to 36 are for selecting multiple items in Competition Form Dropdown menu
    // const [selectedItems, setSelectedItems]= useState([]);
    
    // function handleSelect(eventKey, event){
    //   setSelectedItems([selectedItems, eventKey]);
    // }
    // function handleDeselect(eventKey, event){
    //   setSelectedItems(selectedItems.filter((item) => !eventKey));
    // }

      //ContenCard begins beyond this line
      return (
        <div className="content-card">
          {id === "first" && (
            <div id="first">
              <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8 col-lg-6">
                    {/* <img src={require("./bs.png")} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
                    {/* <Image src={require("../../assets/Brand/members.png")} className="d-block mx-lg-auto img-fluid shadow-box-right-sm" alt=""  /> */}
                    <Image src={imageSrc} alt={imageAlt} className={className} />
                    {/* <Image src={require ('../../assets/Brand/members.png')}/> */}
                  </div>
                  <div className="col-lg-6">
                    {/* <h1 className="display-5 fw-bold lh-1 mb-3 h1-text-content"><span>A</span>bout <span>U</span>s</h1> */}
                    <h1 className="display-5 fw-bold lh-1 mb-3 h1-text-content"><span>{title[0]}</span>{title.substring(1,title.length - 2)}<span>{title.charAt(title.length -2)}</span>{title.charAt(title.length -1)}</h1>
                    {/* <h4 className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</h4> */}
                    <h4 className="lead">{paragraph}</h4>
                  </div>
                </div>
              </div>
            </div>)
          }
    
            {id === "second" && (
              <div id="second">
                <div className="container col-xxl-8 px-4 py-5">
                  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                      {/* <img src={require("./bs.png")} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
                      {/* <Image src={require("../../assets/Brand/members.png")} className="d-block mx-lg-auto img-fluid shadow-box-right-sm" alt=""  /> */}
                      
                      {/* <h1 className="display-5 fw-bold lh-1 mb-3 h1-text-content"><span>A</span>bout <span>U</span>s</h1> */}
                      <h1 className="display-5 fw-bold lh-1 mb-3 h1-text-content"><span>{title[0]}</span>{title.substring(1,title.length - 2)}<span>{title.charAt(title.length -2)}</span>{title.charAt(title.length -1)}</h1>
                      {/* <h4 className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</h4> */}
                      <h4 className="lead">{paragraph}</h4>
                      {/* <Image src={require ('../../assets/Brand/members.png')}/> */}
                    </div>
                    <div className="col-lg-6">
                      <Image src={imageSrc} alt={imageAlt} className={className} />
                    </div>
                  </div>
                </div>
              </div>
              )
            }

            {id === "competition_card" && (
              <div className = "card">
                <Image src={modalImage} alr={imageAlt} className="card-img-top"/>
                  <div className="card-body">
                  <h5 className="card-title">{modalTitle}</h5>
                  {/* <p className = "card-text">{competitionDescription}</p> */}
                </div>  
                <CardWithModal  modalTitle={modalTitle} modalImageSrc={modalImage} modalImageAlt={imageAlt} modalDetails={competitionDescription}/>
              </div>
// <modalcard modalTitle={title} modalImageSrc={imageSrc} modalDetails={competitionDescription} modalImageAlt={imageAlt}/>
            )}
          
          {/* This is a second attempt at the modal
          {/* Below is the new card */}
          {/* {id === "competition_card" && (
             <div className = "card">
                <Image src={imageSrc} alr={imageAlt} className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className = "card-text">{details}</p> {/*Let's see what this does.... 
                    <button type="button"  class="btn btn-primary" data-bs-toggle={<CardWithModal modalTitle={title} modalImageSrc={imageSrc} modalDetails={modalDetails} modalImageAlt={imageAlt}/>} data-bs-target="#CardWithModal">
                      Details
                    </button> 
                    <button type="button"  class="btn btn-primary" onClick={() => setShowModal(true)}>
                      Details
                    </button>
                  </div>  
            


            </div>

          )}  */}


          {/* Below this  line is the component for the competition form. id is competitionForm_Component */}
          {/* {id === "competitionForm_Component" && (
            
            <div class = "conatiner-lg">
              <div class="row justify-content-center my-5">
                <div class="col-lg-6">
                  <form>
                    {/* First question Below */}
                    {/* <div>
                      <label for="ASCEMemberRadioQuestion" class="form=label">Are you an ASCE Member?</label>
                      <div class="form-check">
                        <input className = "form-radio-input" type="radio" name="FirstRadio" id="ASCEMemberRadioQuestion">
                          <label htmlFor="ASCEMemberRadioQuestion" className="form-label">Yes</label>
                        </input>
                      </div>
                      <div class="form-check">
                        <input className = "form-radio-input" type="radio" name="FirstRadio" id="ASCEMemberRadioQuestion">
                          <label htmlFor="ASCEMemberRadioQuestion" className="form-label">No</label>
                        </input>
                      </div>
                    </div>
                     */}
                    {/* second quesiton below */}
                    {/* <div class="mb-3">
                      <label htmlFor="ASCEMemberNumber" className="form-label">ASCE Member Number</label>
                      <input type="text" className="form-control" id="ASCEMemberNumber" aria-describedby="memberNumberHelp"></input>
                      <div id="memberNumberHelp" class="form-text">
                        If you do not have an ASCE Member Number, then please become an official ASCE Member at https://www.asce.org/membership
                      </div>
                    </div> */}

                    {/* Third question Below  */}
                    {/* <div class="mb-3">
                      <label htmlFor="competitionsDropdown" className="form">Select the competitions you are interested in participating.</label>
                      

                      <DropdownButton id="competitionsDropdown" title="Competitions">

                          <Dropdown.Item href="#Concrete Canoe" onSelect={handleSelect} onDeselect={handleDeselect}>
                            1. Concrete Canoe
                          </Dropdown.Item>

                          <Dropdown.Item href="#Steel Bridge" onSelect={handleSelect} onDeselect={handleDeselect}>
                            2. Steel Bridge
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Timber Strong" onSelect={handleSelect} onDeselect={handleDeselect}>
                            3. Timber Strong
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Sustainable Solutions" onSelect={handleSelect} onDeselect={handleDeselect}>
                            4. Sustainable Solutions
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Innovation Contest" onSelect={handleSelect} onDeselect={handleDeselect}>
                            5. Innovation Contest
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Construction Institute" onSelect={handleSelect} onDeselect={handleDeselect}>
                            6. Construction Institute
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Surveying" onSelect={handleSelect} onDeselect={handleDeselect}>
                            7. Surveying
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="Concrete Bridge" onSelect={handleSelect} onDeselect={handleDeselect}>
                            8. Concrete Bridge
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Traffic Control" onSelect={handleSelect} onDeselect={handleDeselect}>
                            9. Traffic Conctrol
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Geo-Wall" onSelect={handleSelect} onDeselect={handleDeselect}>
                            10. Geo-Wall
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Muddy Waters" onSelect={handleSelect} onDeselect={handleDeselect}>
                            11. Muddy Waters
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Concrete Cornhole" onSelect={handleSelect} onDeselect={handleDeselect}>
                            12. Concrete Cornhole
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Plans Reading" onSelect={handleSelect} onDeselect={handleDeselect}>
                            13. Plans Reading
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Proffessional Paper" onSelect={handleSelect} onDeselect={handleDeselect}>
                            14. Proffessional Paper
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#T-Shirt Contest" onSelect={handleSelect} onDeselect={handleDeselect}>
                            15. T-Shirt Contest
                          </Dropdown.Item>
                          
                          <Dropdown.Item href="#Mystery Competition" onSelect={handleSelect} onDeselect={handleDeselect}>
                            16. Mystery Competition
                          </Dropdown.Item>
                      
                      </DropdownButton>
                    </div>
                  
                    
                    
                  </form>
                </div>
              </div>
            </div> */} 

          {/* )} */}
            
        </div>
      );
 }
export default Template;    
      



    //added competitionDescription and modalImage to the modal
  // console.log(typeof imageSrc);
  // console.log(imageSrc);
  // console.log(title.substring(2,4));
 
  


  
//FIRST MODAL ATTEMPT
// {id === "competition_card" && (
       
/* <div class ="card text-center  mt-2">
/* <Image  src={require("../../assets/Brand/Surveying.png")} alt="" style={{width:'100', height:'auto'}}/> */
//  <Image src={imageSrc} alt={imageAlt} />
//  {/* <img src ="Surveying.png" alt="..." class="card-img-top"/> */}
//  <div class="d-flex justify-content-between">
//    <div class="d-flex flex-row align-items-center">
//      <div class = "card-body">
//        <h7>{title}</h7>
//      {/* < a href="#" class="btn btn-primary">{paragraph}</a> */}
//      </div>
//    </div>

//    {/* MODAL GOES BELOW THIS LINE. IT IS SUPPOSED TO BE PART OF THE CARD COMPONENT */}
//    <div>

//    <section>
//    {/* <!-- Button trigger modal --> */}
//    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//      Details
//    </button>

//    {/* <!-- Modal --> */}

//    {/* I think showModal and handleClose go here */}
//    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//      <div class="modal-dialog">
//        <div class="modal-content">
//          <div class="modal-header">
//            <h1 class="modal-title fs-5" id="staticBackdropLabel">{title}</h1>
//            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//          </div>
//        <div class="modal-body">
//          <h8>{paragraph}</h8>
//          <Image src={modalImage} alt={imageAlt} />
//        </div>
//          <div class="modal-footer">
//            <button type="button" class="btn btn-primary">Join!</button>
//          </div>
//      </div>
//    </div>
//  </div>
// </section>

//    </div>
//  </div>

//  {/* modal goes here */}


// </div>


// )} 