import "./AppLogo.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Icon from "./logo";

function template(props) {
  const {id} = props;
  return (
    <div className="app-logo">
      {id === "Header_logo" &&(
        <div className="svg-container">
         <Navbar.Brand href='/Home'><svg><Icon/></svg></Navbar.Brand>
        </div>
        )}

        {id === "Footer_logo" && (
          <div className="svg-container">
            <Icon/>
          </div>
        )}
      </div>
  );
};

export default template;


