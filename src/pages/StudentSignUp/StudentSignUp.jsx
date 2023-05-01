import "./StudentSignUp.css";
import React, { useState } from "react";
 
function Template() {

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

  //checkInput function for the validation 
  function checkInput (formData) {
    //validation constants
    const regexEmail = /^[a-zA-Z]+_[0-9]+@students\.pupr\.edu$/;
    let hasError = false;
    
    if (!regexEmail.test(formData.email)){
      alert('Please enter a @students.pupr.edu valid email!');
      hasError = true;
    }

    return(!hasError);  
  };
    
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (checkInput(formData)){      
      const formDataJson = JSON.stringify(formData);
      console.log(formDataJson);
    }else {
      console.log('error');
      alert('Input ERROR');
      }
  };

  return (
    <div class="container">
    <header class="header">
      <h1 id="title" class="text-center">Welcome to the Polytechnic University of Puerto Rico's American Society of Civil Engineers Sign Up!</h1>
      <p id="description" class="text-center">
        To be a part of the Polytechnic University of Puerto Rico's American Society of Civil Engineers (PUPR-ASCE), you must complete the information below!
      </p>
    </header>
    <div class="form-wrap">	
      <form id="asce-form" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              {/* 1. Name */}
              <label id="name-label" for="name">First & Last Name</label>
              <input type="text" name="name" id="name" placeholder="John Doe" class="form-control" onChange={handleChange} required/>
            </div>
          </div>

          {/* 2. Institutional Email */}
          <div class="col-md-6">
            <div class="form-group">
              <label id="email-label" for="email">Institutional Email</label>
              <input type="email" name="email" id="uniEmail" placeholder="doe_123456@students.pupr.edu" class="form-control" onChange={handleChange} required/>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              {/* 3. Phone */}
              <label id="number-label" for="number">Phone</label>
              <input type="text" name="phone" id="phone" class="form-control" placeholder="787-123-4567" onChange={handleChange} required/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              {/* 4. shirt Size */}
              <label>Shirt Size</label>
              <select id="size" name="size" class="form-control" onChange={handleChange} required>
                <option disabled selected value>Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extraLarge">Extra Large</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
            <div class="form-group">
              {/* 5. Age */}
              <label id="number-label" for="number">Age</label>
              <input type="text" name="age" id="number" class="form-control" placeholder="Enter your age" onChange={handleChange} required/>
            </div>
            <div class="form-group">
              <label id="number-label" for="number">Department</label>
              <input type="text" name="department" id="department" class="form-control" placeholder="Enter your department" onChange={handleChange} required/>
            </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
            <div class="form-group">
              {/* 6. Bachelor */}
              <label id="number-label" for="number">Bachelor</label>
              <input type="text" name="bachelor" id="bachelor" class="form-control" placeholder="Enter your bachelor" onChange={handleChange} required/>
            </div>
            <div class="form-group">
              {/* 8. Academic Year */}
              <label id="number-label" for="number">Academic Year</label>
              <input type="text" name="academic" id="academic" min="1" max="15" class="form-control" placeholder="Enter your academic year" onChange={handleChange} required/>
            </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <div class="disclaimer">
                {/* Checkbox */}
                <input type="checkbox" 
                  id="checkbox" required/> After the "Submit" button, there will be a fee of $25.00 dollars
                  in order to become a member of the PUPR-ASCE, by contacting the PUPR-ASCE treasuer directive member. 
                  The $25.00 dollars are not refundable.  
                </div>   
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-12">
            {/* Button*/} 
            <button type="submit" id="submit" class="btn btn-primary btn-block">Submit</button>
          </div>
        </div>

      </form>
	  </div>	
  </div>

  );
};

export default Template;

// For the questions and texts, find a keyword that separates them
