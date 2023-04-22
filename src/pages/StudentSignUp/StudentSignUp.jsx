import "./StudentSignUp.css";
import React  from "react";
// import{ useState } from "react"

//TO-DO:
//find a way to validate inputs, in also fixing the 'white page' problem
//find a way to have it more centered that it already is
//add checkbox

  //email validation @pupr.edu || @students.pupr.edu 
  //label for = form-email className=form-label /label (inside input) 

// const [submitted, setSubmitted] = useState();
// const [valid, setValid] = useState();

function Template() {

  // ---------------------------------------------------------------
  // validation form
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   size: "",
  //   age: "",
  //   bachelor: "",
  //   department: "",
  //   academic: ""
  // });

  // const handleInputChange = (event) => {
  //   event.preventDefault();

  //   const {name, value} = event.target;
  //   setValues((values) => ({
  //     ...values,
  //     [name]: value
  //   }));

  //       // const [submitted, setSubmitted] = useState(false);
  //       // const [valid, setValid] = useState(true);
  //   };
  
  // const [submitted, setSubmitted] = useState(false);
  // const [valid, setValid] = useState(true);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (values.fullName && values.email && values.phone && values.shirtSize
  //         && values.age && values.bachelor && values.department && values.academicYear) {
  //           setValid(true);
  //       }
  //       setSubmitted(true);
  //   };

  //   //checkbox
  //   const [checked, setChecked] = useState(false);

  //   const handleChange = () => {
  //     setChecked(!checked);
  //   };
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  //JSON format
  // const form = document.getElementById("asce-form");

  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   const name = document.getElementById("name").value;
  //   const email = document.getElementById("email").value;
  //   const phone = document.getElementById("phone").value;
  //   const size = document.getElementById("shirtSize").value;
  //   const age = document.getElementById ("age").value;
  //   const bachelor = document.getElementById("bachelor").value;
  //   const department = document.getElementById("department").value;
  //   const academic = document.getElementById("academic").value;

  //   const formData = {
  //     name: name,
  //     email: email,
  //     cellphone: phone,
  //     size: size,
  //     age: age,
  //     degree: bachelor,
  //     department: department,
  //     academic: academic
  //   }

  //   console.log(formData);

  //   const formDataJson = JSON.stringify(formData);
  //   console.log(formDataJson); 
  // });
  // ---------------------------------------------------------------

  return (
    <div class="container">
    <header class="header">
      <h1 id="title" class="text-center">Welcome to the Polytechnic University of Puerto Rico's American Society of Civil Engineers Sign Up!</h1>
      <p id="description" class="text-center">
        To be a part of the Polytechnic University of Puerto Rico's American Society of Civil Engineers (PUPR-ASCE), you must complete the information below!
      </p>
    </header>
    <div class="form-wrap">	
      <form id="asce-form">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              {/* 1. Name */}
              <label id="name-label" for="name">Name</label>
              <input type="text" name="fullName" id="name" placeholder="Enter your full name" class="form-control" required/>
            </div>
          </div>

          {/* 2. Institutional Email */}
          <div class="col-md-6">
            <div class="form-group">
              <label id="email-label" for="email">Institutional Email</label>
              <input type="email" name="email" id="uniEmail" placeholder="Enter your email with (@students.pupr.edu)" class="form-control" required/>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              {/* 3. Phone */}
              <label id="number-label" for="number">Phone</label>
              <input type="text" name="phone" id="phone" class="form-control" placeholder="Enter your phone number" required/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              {/* 4. shirt Size */}
              <label>Shirt Size</label>
              <select id="size" name="sizeShirt" class="form-control" required>
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
              <input type="number" name="age" id="number" min="10" max="99" class="form-control" placeholder="Enter your age" required/>
            </div>
            <div class="form-group">
              <label id="number-label" for="number">Department</label>
              <input type="text" name="department" id="department" class="form-control" placeholder="Enter your department" required/>
            </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
            <div class="form-group">
              {/* 6. Bachelor */}
              <label id="number-label" for="number">Bachelor</label>
              <input type="text" name="bachelor" id="bachelor" class="form-control" placeholder="Enter your bachelor" required/>
            </div>
            <div class="form-group">
              {/* 8. Academic Year */}
              <label id="number-label" for="number">Academic Year</label>
              <input type="text" name="academicYear" id="academic" min="1" max="15" class="form-control" placeholder="Enter your academic year" required/>
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
