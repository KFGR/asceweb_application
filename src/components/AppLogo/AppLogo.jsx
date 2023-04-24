import "./AppLogo.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
// import Icon from "./logo";
// import icon from '../../assets/Brand/logo/Logo.png';
import Icon from './newlogo';
function template(props) {
  const {id} = props;
  return (
    <div className="app-logo app-logo-container">
      {id === "Header_logo" &&(
        <div className="svg-container">
        <Navbar.Brand href='/Home'><svg><Icon viewbox="0 75 804 150"/></svg></Navbar.Brand>
        {/* <Icon viewbox="0 75 504 150" /> */}
        {/* <Icon viewbox="0 75 804 150" /> */}

        </div>
        )}

        {id === "Footer_logo" && (
          <div className="svg-container">
            <Icon viewbox="0 0 504 360"/>
          </div>
        )}
      </div>
  );
};

export default template;


