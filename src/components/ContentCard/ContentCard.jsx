import "./ContentCard.css";
import React from "react";
import {Image} from "react-bootstrap";
import CardWithModal from "./Modal.jsx";


 function Template(props){

    const {id,className, imageSrc, imageAlt, title, paragraph, modalImage, modalTitle, competitionDescription} = props;
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
      )}
      {id === "third" && (
        <div id="third">
            <div className="container-fluid">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            <h1 className="h1-text-content"><strong><span>{title[0]}</span>{title.substring(1,title.length - 2)}<span>{title.charAt(title.length -2)}</span>{title.charAt(title.length -1)}</strong></h1>
            <p className="lead">{paragraph}</p>

            </div>
            <div className="col-lg-5 offset-lg-1 p-0  shadow-lg">
            <Image src={imageSrc} alt={imageAlt} className={className} width={"100%"} height={"auto"} />
            </div>
        </div>
      </div>
          </div>
      )}
      {id === "fourth" && (
        <div id="fourth" className="container-fluid-row">
            <div className="container-fluid">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3" style={{justifyContent:"space-evenly"}}>
            <div className="col-lg-5 offset-lg-1 p-0  shadow-lg">
            <Image src={imageSrc} alt={imageAlt} className={className} width={"100%"} height={"auto"} />
            </div>
            <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            <h1 className="h1-text-content"><strong><span>{title[0]}</span>{title.substring(1,title.length - 2)}<span>{title.charAt(title.length -2)}</span>{title.charAt(title.length -1)}</strong></h1>
            <p className="lead">{paragraph}</p>

            </div>
        </div>
      </div>
          </div>
      )}


      {id === "competition_card" && (
        <div className="cardBody">
          <div>
            <Image src={modalImage} alr={imageAlt} className="card-img-top img-fluid"/>
            <h5 className="cardTitle">{modalTitle}</h5>
            <CardWithModal modalTitle={modalTitle} modalImageSrc={modalImage} modalImageAlt={imageAlt} modalDetails={competitionDescription}/>
          </div>
          </div>

      )}
  </div>
);
 }
export default Template;
