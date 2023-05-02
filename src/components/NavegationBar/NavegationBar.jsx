import "./NavegationBar.css";
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function template(props) {
  const {color} = props;
  return (
    <div className="navegation-bar navegation-bar-menu">
      <Navbar className='navbar navbar-expand-lg' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar' style={{color:'#fbb71a', backgroundColor:'#144a9a'}}/>
          <Navbar.Collapse  id='basic-navbar' style={{color:'#fbb71a'}}>
            <ul className='navbar-nav nav-masthead margin-left-auto mb-2 mb-lg-0'>
            <Nav.Link as={Link} to="/Home" className='nav-link py-1' aria-current="page" ><li style={{color:color, fontSize:'1.5rem'}}>Home</li></Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className='nav-link py-1' aria-current="page" ><li style={{color:color, fontSize:'1.5rem'}}>About us</li></Nav.Link>
            <Nav.Link as={Link} to="/Competitions" className='nav-link py-1' aria-current="page" ><li style={{color:color, fontSize:'1.5rem'}}>Competitions</li></Nav.Link>
            <Nav.Link as={Link} to="/Sponsors" className='nav-link py-1' aria-current="page" ><li style={{color:color, fontSize:'1.5rem'}}>Sponsors</li></Nav.Link>
            </ul>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default template;
