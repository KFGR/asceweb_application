import "./AppFooter.css";
import React from "react";

import AppLogo from '../AppLogo';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

function template() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="AppFooter">
    <div className="container container-footer">
           <div className="row" style={{borderTop:'0.5rem solid #144a9a'}}>
              <div className="col-12">
                <div className="row container-footer-row">
                  <div className="col"> {/* was on col-lg-4 */}
                      <div className="grid-item">
                        <div className="ht-box-icon icon-image">
                          <div className="icon-box-wrap" style={{paddingLeft:'0%', paddingTop:'0%', padding:'0%', margin:"0%"}}>
                            <div className="footer-content-header">
                              <div className="footer-icon">
                                {/* <FontAwesomeIcon icon={faHandshake} /> */}
                                <AppLogo id="Footer_logo" style={{padding:'0%'}}/>
                              </div>
                            </div>
                            <div className="footer-content text-center" style={{paddingTop:'0%'}}>
                              {/* <p style={{color:'black'}}>
                                To expose your brand will be presented in front of hundreds of people in the regional spectrum, 
                                and in the national spectrum will be in the thousands.
                              </p> */}
                              <a href="/StudentSignUp"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Join today</button></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <div className="col">
                    <div className="grid-item">
                      <div className="ht-box-icon">
                        <div className="icon-box-wrap">
                          <div className="footer-content-header">
                            <div>
                              <h5 className="footer-heading">Navigation</h5>
                            </div>
                          </div>
                          <div className="footer-content">
                          <ul style={{fontSize:'75%', padding:'0%', textAlign:'center'}}>
                          <div className="row" style={{flexDirection:'column'}}>

                            <Nav.Link as={Link} to="/Home"className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%', fontWeight:"700"}}>Home</li></Nav.Link>
                            <Nav.Link as={Link} to="/AboutUs" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%', fontWeight:"700"}}>About US</li></Nav.Link>
                            <Nav.Link as={Link} to="/Competitions" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%', fontWeight:"700"}}>Competitions</li></Nav.Link>
                            <Nav.Link as={Link} to="/Sponsors" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%', fontWeight:"700"}}>Sponsors</li></Nav.Link>
                          </div>
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="grid-item">
                      <div className="ht-box-icon">
                        <div className="icon-box-wrap">
                          <div className="footer-content-header">
                            <div>
                              <h5 className="footer-heading">Contact Us</h5>
                            </div>
                          </div>
                          <div className="footer-content">
                          <ul style={{fontSize:'75%', padding:'0%', textAlign:'center'}}>
                           <div className="row" style={{flexDirection:'column', alignItems:'center'}}>
                              <li className="footer-li" style={{color:'black', fontSize:'150%', width:'100%'}}>
                                <a href="tel:787-552-5508">
                                  <span className="fontawesomeicon">
                                  <FontAwesomeIcon icon={faPhone} />
                                  </span>
                                  <span>
                                  787-552-5508
                                  </span>
                                </a>
                              </li>
                              <li className="footer-li" style={{color:'black', fontSize:'150%', width:'100%'}}>
                                <a href="mailto:valentin_120106@students.pupr.edu">
                                  <span className="fontawesomeicon">
                                  <FontAwesomeIcon icon={faEnvelope} />
                                  </span>
                                  <span style={{textTransform:'lowercase'}}>
                                  valentin_120106@students.pupr.edu
                                  </span>
                                </a>
                              </li>
                              <li className="footer-li" style={{color:'black', fontSize:'150%', width:'100%'}}>
                                <a href="tel:787-669-5618">
                                  <span className="fontawesomeicon">
                                  <FontAwesomeIcon  icon={faPhone} />
                                  </span>
                                  <span>
                                  787-669-5618
                                  </span>
                                </a>
                              </li>
                              <li className="footer-li" style={{color:'black', fontSize:'150%', width:'100%'}}>
                                <a href="mailto:grossy@pupr.edu">
                                  <span className="fontawesomeicon">
                                  <FontAwesomeIcon icon={faEnvelope} />
                                  </span>
                                  <span style={{textTransform:'lowercase'}}>
                                  grossy@pupr.edu
                                  </span>
                                </a>
                              </li>
                              </div>
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </div>
        <div className="footer-copyright">
          <div className="container" style={{padding: '0%'}}>
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-left" style={{padding:'0%'}}>
                <p style={{fontSize:'1rem', fontWeight:'500', textShadow:'1px 0px 1px black'}}>&copy; All rights reserved - {currentYear}</p>
              </div>
              <div className="col-md-6 text-center text-md-right">
              <ul>
                <li className="footer-li" style={{color:'black', fontSize:'150%', textAlign:'center'}}>
                  <div className="media-content-header">
                    <div className="media-icon">
                      <a href="https://www.facebook.com/ASCEPUPR?mibextid=LQQJ4d" className="icon-change-facebook" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="footer-li" style={{color:'black', fontSize:'150%', textAlign:'center'}}>
                  <div className="media-content-header">
                    <div className="media-icon">
                      <a href="https://www.instagram.com/pupr_asce/?igshid=YmMyMTA2M2Y%3D"  className="icon-change-instagram" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram}/>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default template;
