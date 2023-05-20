import "./AdminLogIn.css";
import React from "react";
import { useState } from 'react';
import axios from 'axios';

function Template() {
  
  const [adminFormValues, setAdminFormValues] = useState({
    userName: '',
    password: '',
    token: null,
  });

  const handleChange = (event) => {
    const { name, value }= event.target;
    setAdminFormValues({ ...adminFormValues, [name]: value });
  }; 

  function handleSubmit (event){
    event.preventDefault();
    
    axios.post(`https://ascewebbackend.azurewebsites.net/ascepupr/login/user/form/user/logintodashboard/?userName=${adminFormValues.userName}&passwd=${adminFormValues.password}`)
    .then((response) => {
      console.log(response.data);
      if(response.data.status_code === 201){
        localStorage.setItem('token', response.data.body);
        window.location.href = '/Dashboard';
      }else{
        alert(`${response.data.body}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }


  return (
  <>
    <div className="header-top-bar-info d-lg-block">
        <div className="container-fluid py-2 header-yllw"/> 
        <div className="container-fluid py-3 header-ble"/>        
    </div>

    
    <form onSubmit={handleSubmit}>
      <div className="adminLogIn" >
        <h1>Administrator Dashboard Login</h1>
      </div>  
      <div className="admin-log-in loginbox mx-auto mt-5 w-25 p-5 bg-light border text-center">
          
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
