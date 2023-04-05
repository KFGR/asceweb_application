import "./AppFooter.css";
import React from "react";

import AppLogo from '../AppLogo';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function template() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="AppFooter">
    <div className="container container-footer">
           <div className="row" style={{borderTop:'solid #144a9a'}}>
              <div className="col-12">
                <div className="row">
                  <div className="col"> {/* was on col-lg-4 */}
                      <div className="grid-item">
                        <div className="ht-box-icon icon-image">
                          <div className="icon-box-wrap" style={{paddingLeft:'0%', paddingTop:'0%'}}>
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
                              <a href="/home"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Join today</button></a>
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
                              <h5 className="footer-heading">Navegation</h5>
                            </div>
                          </div>
                          <div className="footer-content">
                          <ul style={{fontSize:'75%', padding:'0%', textAlign:'center'}}>
                            <Nav.Link as={Link} to="/Home" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Home</li></Nav.Link>
                            <Nav.Link as={Link} to="/Team" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Team</li></Nav.Link>
                            <Nav.Link as={Link} to="/Competitions" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Competitions</li></Nav.Link>
                            <Nav.Link as={Link} to="/Contacts" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Contacts</li></Nav.Link>
                            <Nav.Link as={Link} to="/Join" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Join</li></Nav.Link>
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
                              <h5 className="footer-heading">Competitions</h5>
                            </div>
                          </div>
                          <div className="footer-content">
                          <ul style={{fontSize:'75%', padding:'0%', textAlign:'center'}}>
                            <Nav.Link as={Link} to="Concrete_Canoe" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Concrete Canoe</li></Nav.Link>
                            <Nav.Link as={Link} to="Steel_Bridge" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Steel Bridge</li></Nav.Link>
                            <Nav.Link as={Link} to="Timber_Strong" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Timber-Strong</li></Nav.Link>
                            <Nav.Link as={Link} to="Sustainable_Solutions" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Sustainable Solutions</li></Nav.Link>
                            <Nav.Link as={Link} to="Innovation_Contest" className='nav-link py-1' aria-current="page" ><li className="footer-li" style={{color:'black', fontSize:'150%'}}>Innovation Contest</li></Nav.Link>
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
                      <a href="/Facebook">
                        <FontAwesomeIcon icon={faFacebook}/>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="footer-li" style={{color:'black', fontSize:'150%', textAlign:'center'}}>
                  <div className="media-content-header">
                    <div className="media-icon">
                      <a href="https://www.instagram.com/pupr_asce/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
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
