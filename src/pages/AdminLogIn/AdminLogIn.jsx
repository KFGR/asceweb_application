import "./AdminLogIn.css";
import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Template() {
  
  const initialValue = {userName: "", password: "", token: localStorage.getItem('token')};
  const [adminFormValues, setAdminFormValues] = useState(initialValue);

  const [invalidInput, setinvalidInput] = useState('');

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


  


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(adminFormValues);
    console.log('handleSubmit called');

    if(localStorage.length === 0){
      const response = await axios.post (`https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/LOGIN/?userName=${adminFormValues.userName}&passwd=${adminFormValues.password}`);
      
      console.log(response.data);//check if the database sends any response
  
      const responseModel = response.data;

      console.log('estamos adentro del if');
      if(responseModel['status_code'] === 201){
          localStorage.setItem('token',responseModel['body']);
          window.location.href = '/Home';
      }
    }else{
      const response = await axios.post (`https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/LOGIN/?userName=${adminFormValues.userName}&passwd=${adminFormValues.password}&token=${adminFormValues.token}`);
      
          console.log(response.data);//check if the database sends any response
      
       const responseModel = response.data;
      
       console.log('estamos adentro del else');
       if(responseModel['status_code'] === 200){
         // localStorage.setItem('token',responseModel['body']);
         window.location.href = '/Home';
       }
       else if(responseModel['status_code'] === 201){
        localStorage.setItem('token',responseModel['body']);
        window.location.href = '/Home';
       }
       else if(responseModel['status_code'] === 401){
        console.log(responseModel['body']);
        setinvalidInput(responseModel['body']);
       }
    }
  


    

    // try{
    //   // const response = await axios.post("https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/LOGIN/",{ THIS RESULTED IN ERROR CODE 422
    //     // const response = await axios.post("https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/CREATE_MASTER_ADMIN/?userName=AleMasterTwo&passwd=Th1sistH3%40therp%40ss&name=Alejandro&email=alejandro%40throwaway.com&phone=7771234567",{
    //    const response = await axios.post (`https://ascewebbackend.azurewebsites.net/ASCEPUPR/ADMIN/LOGIN/?userName=${adminFormValues.userName}&passwd=${adminFormValues.password}&token=${adminFormValues.token}`);
      
    //       console.log(response.data);//check if the database sends any response
      
    //    const responseModel = response.data;

    //    if(responseModel['status_code'] === 200){
    //       localStorage.setItem('token',responseModel['body']);
    //       <Link to = '/Home' ></Link>
    //    }


    //    //console.log(response);
    //   //Store the token in localStorage or as a cookie
    //   //Redirect the user to the dashboard or private section of the website
    //   //console.log(token);

    //   //console.log('response', response);
    //   //console.log('token',token['body']);

     
    //   console.log(localStorage.length);

    // }catch(error){
    //   console.log(error);
    // }
    

  };

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
        <p> {invalidInput} </p>
      </div>
    </form>
    
  </>
  );
};

export default Template;
