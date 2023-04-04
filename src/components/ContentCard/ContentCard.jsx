import "./ContentCard.css";
import React from "react";
import { Image } from "react-bootstrap";

function template(props) {
  const {id,className, imageSrc, imageAlt, title, paragraph} = props;
  // console.log(typeof imageSrc);
  // console.log(imageSrc);
  // console.log(title.substring(2,4));
 
  
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
        </div>)}

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
    </div>
  );
}

export default template;
