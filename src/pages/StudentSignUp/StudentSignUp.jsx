import "./StudentSignUp.css";
import React, { useState } from "react";
 
function Template() {
  const [picSize,setSize] = useState('Select')
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

  //checkInput function htmlFor the validation 
  function checkInput (formData) {
    //validation constants
    const regexEmail = /^[a-zA-Z]+_[0-9]+@students\.pupr\.edu$/;
    let hasError = false;
    console.log(formData.email)
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
    if (name === "size"){
      setSize(value);
    }
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
              <input type="text" name="name" id="name" placeholder="John Doe" className="form-control" onChange={handleChange} required/>
            </div>
          </div>

          {/* 2. Institutional Email */}
          <div className="col-md-6">
            <div className="form-group">
              <label id="email-label" htmlFor="email">Institutional Email</label>
              <input type="email" name="email" id="uniEmail" placeholder="doe_123456@students.pupr.edu" className="form-control" onChange={handleChange} required/>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              {/* 3. Phone */}
              <label id="number-label" htmlFor="number">Phone</label>
              <input type="text" name="phone" id="phone" className="form-control" placeholder="787-123-4567" onChange={handleChange} required/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              {/* 4. shirt Size */}
              <label>Shirt Size</label>
              {/* <select id="size" name="size" className="form-control" onChange={handleChange} required>
                <option disabled selected value>Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extraLarge">Extra Large</option>
              </select> */}
              <select id="size" name="size" value={picSize} className="form-control" onChange={handleChange} required>
                <option  value="selected">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extraLarge">Extra Large</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
            <div className="form-group">
              {/* 5. Age */}
              <label id="number-label" htmlFor="number">Age</label>
              <input type="text" name="age" id="number" className="form-control" placeholder="Enter your age" onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label id="number-label" htmlFor="number">Department</label>
              <input type="text" name="department" id="department" className="form-control" placeholder="Enter your department" onChange={handleChange} required/>
            </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
            <div className="form-group">
              {/* 6. Bachelor */}
              <label id="number-label" htmlFor="number">Bachelor</label>
              <input type="text" name="bachelor" id="bachelor" className="form-control" placeholder="Enter your bachelor" onChange={handleChange} required/>
            </div>
            <div className="form-group">
              {/* 8. Academic Year */}
              <label id="number-label" htmlFor="number">Academic Year</label>
              <input type="text" name="academic" id="academic" min="1" max="15" className="form-control" placeholder="Enter your academic year" onChange={handleChange} required/>
            </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <div className="disclaimer">
                {/* Checkbox */}
                <input type="checkbox" 
                  id="checkbox" required/> After the "Submit" button, there will be a fee of $25.00 dollars
                  in order to become a member of the PUPR-ASCE, by contacting the PUPR-ASCE treasuer directive member. 
                  The $25.00 dollars are not refundable.  
                </div>   
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            {/* Button*/} 
            <button type="submit" id="submit" className="btn btn-primary btn-block">Submit</button>
          </div>
        </div>

      </form>
	  </div>	
  </div>

  );
};

export default Template;

// htmlFor the questions and texts, find a keyword that separates them
