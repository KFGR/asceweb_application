import "./StudentSignUp.css";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import axios from 'axios';
 
function Template() {
  const [picSize,setSize] = useState('Select') //pic = picture ; pick= escoge
  // validation form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    size: '',
    age: '',
    bachelor: '',
    department: '',
    academic: ''
  });

  //checkInput function htmlFor the validation - This function is for the email validation to make sure it is *****_numbers@students.pupr.edu
  function checkInput (formData) {
    //validation constants
    const regexEmail = /^[a-zA-Z]+_[0-9]+@students\.pupr\.edu$/;
    const regexName = /[A-Z][a-z]{2,}( [A-Z][a-z]{1,})+$/ //ADDED FOR THE FIRST NAME LAST NAME VALIDATION
    const regexPhone = /^(?:\d{3}-\d{3}-\d{4}|\d{10})$/;
    const regexNumbers = /^[0-9]+$/;
    let hasError = false;
    // let error = " ";
    var addError;
    if(!regexName.test(formData.name) || formData.name.trim().split(' ').length !== 2){ //ADDED FOR THE FIRST NAME LAST NAME VALIDATION
      // alert('Please enter your First Name and your Last Name only.');
      // error = error + "\nPlease enter your First Name and your Last Name only.";
      hasError = true;
      addError = document.querySelector('#name');
      addError.classList.add('error');
      addError = document.querySelector('#namebox');
      addError.classList.remove('hidden');
    }
    if (!regexEmail.test(formData.email)){
      // alert('Please enter a @students.pupr.edu valid email!');
      // error += "\nPlease enter a @students.pupr.edu valid email!"
      hasError = true;
      addError = document.querySelector('#uniEmail');
      addError.classList.add('error');
      addError = document.querySelector('#uniEmailbox');
      addError.classList.remove('hidden');
    }
    if(formData.confirm !== true){
      // alert('Please check the checkbox at the end of the form');
      // error += "\nPlease check the checkbox at the end of the form";
      hasError = true;
    }
    if(formData.size !== "S" && formData.size !== "M" && formData.size !== "L" && formData.size !== "XL"){
      // alert('Please select a valid size');
      // error += "\nPlease select a valid size"
      hasError = true;
      addError = document.querySelector('#size');
      addError.classList.add('error');
      addError = document.querySelector('#sizebox');
      addError.classList.remove('hidden');
    }
    if(!regexPhone.test(formData.phone)){
      // alert('Please enter a valid phone number');
      // error += "\nPlease enter a valid phone number";
      hasError = true;
      addError = document.querySelector('#phone');
      addError.classList.add('error');
      addError = document.querySelector('#phonebox');
      addError.classList.remove('hidden');
    }
    if(!regexNumbers.test(formData.age)){
      // alert('Please enter a valid age');
      // error += "\nPlease enter a valid age";
      hasError = true;
      addError = document.querySelector('#number');
      addError.classList.add('error');
      addError = document.querySelector('#numberbox');
      addError.classList.remove('hidden');
    }
    if(!regexNumbers.test(formData.academic)){
      // alert('Please enter a valid academic year number');
      // error += "\nPlease enter a valid academic year number"
      hasError = true;
      addError = document.querySelector('#academic');
      addError.classList.add('error');
      addError = document.querySelector('#academicbox');
      addError.classList.remove('hidden');
    }
    if(!regexNumbers.test(formData.academic)){
      // alert('Please enter a valid academic year number');
      // error += "\nPlease enter a valid academic year number"
      hasError = true;
      addError = document.querySelector('#department');
      addError.classList.add('error');
      addError = document.querySelector('#departmentbox');
      addError.classList.remove('hidden');
    }
    if(!regexNumbers.test(formData.academic)){
      // alert('Please enter a valid academic year number');
      // error += "\nPlease enter a valid academic year number"
      hasError = true;
      addError = document.querySelector('#bachelor');
      addError.classList.add('error');
      addError = document.querySelector('#bachelorbox');
      addError.classList.remove('hidden');
    }
    // if (hasError === true){
    //   alert(error);
    // }
    return(!hasError);  
  };
    
  function RemoveError(name){
    var removeError;
    if(name === "name"){
      removeError = document.querySelector('#name')
      removeError.classList.remove('error');
      removeError = document.querySelector('#namebox');
      removeError.classList.add('hidden');
    }
    if(name === "email"){
      removeError = document.querySelector('#uniEmail')
      removeError.classList.remove('error');
      removeError = document.querySelector('#uniEmailbox');
      removeError.classList.add('hidden');
    }
    if(name === "size"){
      removeError = document.querySelector('#size')
      removeError.classList.remove('error');
      removeError = document.querySelector('#sizebox');
      removeError.classList.add('hidden');
    }
    if(name === "phone"){
      removeError = document.querySelector('#phone')
      removeError.classList.remove('error');
      removeError = document.querySelector('#phonebox');
      removeError.classList.add('hidden');
    }
    if(name === "age"){
      removeError = document.querySelector('#number')
      removeError.classList.remove('error');
      removeError = document.querySelector('#numberbox');
      removeError.classList.add('hidden');
    }
    if(name === "year"){
      removeError = document.querySelector('#academic')
      removeError.classList.remove('error');
      removeError = document.querySelector('#academicbox');
      removeError.classList.add('hidden');
    }
    if(name === "department"){
      removeError = document.querySelector('#department')
      removeError.classList.remove('error');
      removeError = document.querySelector('#departmentbox');
      removeError.classList.add('hidden');
    }
    if(name === "bachelor"){
      removeError = document.querySelector('#bachelor')
      removeError.classList.remove('error');
      removeError = document.querySelector('#bachelorbox');
      removeError.classList.add('hidden');
    }
  }


  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (name === "size"){
      setSize(value);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    RemoveError(name);

    


  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkInput(formData)){    
      // console.log(formData);
      axios.post(`https://ascewebbackend.azurewebsites.net/ascewepupr/signup/form/signuptochapter/?name=${formData.name}&email=${formData.email}&phone=${formData.phone}&tshirt_size=${formData.size}&age=${formData.age}&bachelor=${formData.bachelor}&department=${formData.department}&Academic_Years=${formData.academic}`)
      .then((response) => {
        if(response.data.status_code === 201){
          alert(`${response.data.body}`);
          window.location.href = "/Home";
          emailjs.send('service_he5fwo7','template_po5c80p', formData, 'cz8JC7lswvQNgszAG')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
            console.log('FAILED...', err);
          });

        }else{
          alert(`${response.data.body}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (checkInput(formData)) {
  //     axios.post(`https://ascewebbackend.azurewebsites.net/ascewepupr/signup/form/signuptochapter/?name=${formData.name}&email=${formData.email}&phone=${formData.phone}&tshirt_size=${formData.size}&age=${formData.age}&bachelor=${formData.bachelor}&department=${formData.department}&Academic_Years=${formData.academic}`)
  //       .then((response) => {
  //         const messageContainer = document.getElementById('message-container');
  //         messageContainer.innerHTML = '';
  
  //         if (response.data.status_code === 201) {
  //           const messageElement = document.createElement('p');
  //           messageElement.textContent = response.data.body;
  //           messageContainer.appendChild(messageElement);
  
  //           setTimeout(() => {
  //             messageContainer.innerHTML = ''; // Clear the message container
  //             window.location.href = "/Home";
  //           }, 5000); // Wait for 5 seconds (5000 milliseconds) before redirecting
  
  //           emailjs.send('service_he5fwo7', 'template_po5c80p', formData, 'cz8JC7lswvQNgszAG')
  //             .then((response) => {
  //               console.log('SUCCESS!', response.status, response.text);
  //             }, (err) => {
  //               console.log('FAILED...', err);
  //             });
  
  //         } else {
  //           let message;
  //           if (response.data.body) {
  //             message = response.data.body;
  //           } else {
  //             message = 'An error occurred. Please try again later.';
  //           }
  
  //           const messageElement = document.createElement('p');
  //           messageElement.textContent = message;
  //           messageContainer.appendChild(messageElement);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };
  
  

  return (
    <div className="SignUp">
    <div className="container">
    <header className="header">
      <h1 id="title" className="text-center">Welcome to the Polytechnic University of Puerto Rico's American Society of Civil Engineers Sign Up!</h1>
      <p id="description" className="text-center">
        To be a part of the Polytechnic University of Puerto Rico's American Society of Civil Engineers (PUPR-ASCE), you must complete the information below!
      </p>
    </header>
    <div className="form-wrap">	
      <form id="asce-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              {/* 1. Name */}
              <label id="name-label" htmlFor="name">First & Last Name</label>
              <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="John Doe" 
              className="form-control" 
              onChange={handleChange} 
              required/>
              <small className="hidden" id="namebox">Invalid name</small>
            </div>
          </div>

          {/* 2. Institutional Email */}
          <div className="col-md-6">
            <div className="form-group">
              <label id="email-label" htmlFor="email">Institutional Email</label>
              <input 
              type="email" 
              name="email" 
              id="uniEmail" 
              placeholder="doe_123456@students.pupr.edu" 
              className="form-control" 
              onChange={handleChange} 
              required/>
              <small className="hidden" id="uniEmailbox">Enter a valid email</small>

            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              {/* 3. Phone */}
              <label id="number-label" htmlFor="number">Phone</label>
              <input 
              type="text" 
              name="phone" 
              id="phone" 
              className="form-control" 
              placeholder="787-123-4567" 
              onChange={handleChange} 
              required/>
              <small className="hidden" id="phonebox">Enter a valid phone</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              {/* 4. shirt Size */}
              <label>Shirt Size</label>
   
              <select id="size" name="size" value={picSize} className="form-control" onChange={handleChange} required>
                <option  value="selected">Select</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
              <small className="hidden" id="sizebox">Enter a valid size</small>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
            <div className="form-group">
              {/* 5. Age */}
              <label id="number-label" htmlFor="number">Age</label>
              <input 
              type="text" 
              name="age" 
              id="number" 
              className="form-control" 
              placeholder="Enter your age" 
              onChange={handleChange} 
              required/>
              <small className="hidden" id="numberbox">Enter a valid age</small>
            </div>
            <div className="form-group">
              <label id="number-label" htmlFor="number">Department</label>
              <input 
              type="text" 
              name="department" 
              id="department" 
              className="form-control" 
              placeholder="Enter your department" 
              onChange={handleChange} 
              required/>
              <small className="hidden" id="departmentbox">Enter a valid department</small>
            </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
            <div className="form-group">
              {/* 6. Bachelor */}
              <label id="number-label" htmlFor="number">Bachelor</label>
              <input 
              type="text" 
              name="bachelor" 
              id="bachelor" 
              className="form-control" 
              placeholder="Enter your bachelor" 
              onChange={handleChange} 
              required/>
              <small className="hidden" id="bachelorbox">Enter a valid bachelor</small>
            </div>
            <div className="form-group">
              {/* 8. Academic Year */}
              <label id="number-label" htmlFor="number">Academic Year</label>
              <input 
              type="text" 
              name="academic" 
              id="academic" 
              min="1" max="15" 
              className="form-control" 
              placeholder="Enter your academic year" 
              onChange={handleChange} 
              required/>
              <small className="hidden" id="academicbox">Enter a valid academic year</small>
            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <div className="disclaimer">
                {/* Checkbox */}
                <input type="checkbox" value={true} name="confirm" onChange={handleChange} 
                  id="checkbox" required/> 
                  <span style={{fontWeight:"900", marginLeft:"2%"}}>
                    After the "Submit" button, there will be a fee of $25.00 dollars
                    in order to become a member of the PUPR-ASCE, by contacting the PUPR-ASCE treasuer directive member. 
                    The $25.00 dollars are not refundable.
                  </span>
                </div>   
            </div>
          </div>
        </div>
        {/* <input type="submit" id="submit" className="btn btn-primary btn-block" value="Submit" style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%"}}/> */}
        <div className="row">
          <div className="col-12">
            <div className="form-group">
            
            <button type="submit" id="submit" className="btn btn-primary btn-block" style={{position:'relative', width:'100%'}}>Submit</button>
          </div>
          </div>
        </div>
        {/* <div className="message-container" id="message-container"/> */}
      </form>
	  </div>	
  </div>
  </div>
  );
};

export default Template;

// htmlFor the questions and texts, find a keyword that separates them
