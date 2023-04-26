import "./AdminLogIn.css";
import React from "react";
import { useState } from 'react';

function Template() {
  
  const initialValue = {userName: "", password: ""};
  const [adminFormValues, setAdminFormValues] = useState(initialValue);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log();
  // }

  const handleChange = (event) => {
    // console.log(event.target);
    const { name, value }= event.target;
    //setAdminFormValues({ [name]: value });
    setAdminFormValues({ ...adminFormValues, [name]: value });
    //console.log(adminFormValues);
    // console.log(name);
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(adminFormValues);
  }

  return (
  <>
    <div className="header-top-bar-info d-lg-block">
        <div className="container-fluid py-2 header-yllw"/> 
        <div className="container-fluid py-3 header-ble"/>        
    </div>

    <pre>{JSON.stringify(adminFormValues, undefined, 2)}</pre>
    <form onSubmit={handleSubmit}>
      <div className="adminLogIn" style={{backgroundColor: 'rgb(20, 74, 154)'}}>
        <h1>Administrator Dashboard Login</h1>
      </div>  
      <div className="admin-log-in" class = "loginbox mx-auto mt-5 w-25 p-5 bg-light border text-center">
          
        {/* Admin Username Input */}
        <div className="input-group mb-3">
          <span className = "input-group-text" id="adminUsernameInputGroup">Username</span>
          <input 
            type="text" 
            className="form-control" 
            
            name="userName" 
            value={adminFormValues.userName} 
            onChange={handleChange}
            required/>
          {/* <div className="invalid"> Please enter your email </div> */}
        </div>
          
        {/* Password Input */}
        <div className="input-group mb-3">
          <span className="input-group-text" id="adminPasswordInputGroup">Password</span>
          <input 
            type="password" 
            className="form-control" 
            id="adminPasswordInputGroup" 
            name="password" 
            value={adminFormValues.password} 
            onChange={handleChange}
            required/>
          {/* <div className="invalid">Please enter your Password.</div> */}
        </div>
        <button className="btn btn-primary">Log In</button>
      </div>
    </form>
    
  </>
  );
};

export default Template;
