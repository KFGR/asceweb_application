import "./NavegationBar.css";
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function template() {
  return (
    <div className="navegation-bar navegation-bar-menu">
      <Navbar className='navbar navbar-expand-lg' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar' style={{color:'#fbb71a', backgroundColor:'#144a9a'}}/>
          <Navbar.Collapse  id='basic-navbar'>
            <ul className='navbar-nav nav-masthead margin-left-auto mb-2 mb-lg-0'>
            <Nav.Link as={Link} to="/Home" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Home</li></Nav.Link>
            <Nav.Link as={Link} to="/Team" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Team</li></Nav.Link>
            <Nav.Link as={Link} to="/Competitions" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Competitions</li></Nav.Link>
            <Nav.Link as={Link} to="/Contacts" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Contacts</li></Nav.Link>
            <Nav.Link as={Link} to="/Join" className='nav-link py-1' aria-current="page" ><li style={{color:'black', fontSize:'150%'}}>Join</li></Nav.Link>
 
              {/* <Nav.Link  className='nav-link py-1'  aria-current="page" href='#Home'><li style={{color:'black', fontSize:'150%'}}>Home</li></Nav.Link> style={{color:'black', fontSize:'150%'}} */}
              {/* <Nav.Link  className='nav-link py-1'  aria-current="page" href='#Team'><li style={{color:'black', fontSize:'150%'}}>Team</li></Nav.Link> style={{color:'black', fontSize:'150%'}} */}
              {/* <Nav.Link  className='nav-link py-1'  aria-current="page" href='#Competitions'><li style={{color:'black', fontSize:'150%'}}>Competitions</li></Nav.Link> style={{color:'black', fontSize:'150%'}} */}
              {/* <Nav.Link  className='nav-link py-1'  aria-current="page" href='#Contacts'><li style={{color:'black', fontSize:'150%'}}>Contacts US</li></Nav.Link> style={{color:'black', fontSize:'150%'}} */}
              {/* <Nav.Link  className='nav-link py-1'  aria-current="page" href='#JoinUS'><li style={{color:'black', fontSize:'150%'}}>Join Us</li></Nav.Link> style={{color:'black', fontSize:'150%'}} */}
            </ul>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default template;
