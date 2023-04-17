import { Form } from "react-bootstrap";
import "./StudentSignUp.css";
import React from "react";

// import Dropdown  from "react-bootstrap/Dropdown";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const sizeOptions = [
  {label: "Select",
   value: ""},
  {label: "Small",
   value: "S" 
  },
  {label: "Medium",
   value: "M" 
  },
  {label: "Large",
   value: "L" 
  },
  {label: "Extra-Large",
   value: "XL" 
  },
]
// Form: <form></form>
function template() {
  return (
    <div className="student-sign-up">
      <h1 className = "sign-up_title" > PUPR ASCE Chapter Sign Up</h1>
      {/* search on how to have it in the same font letter as the header of the site */}
      <h2 className="ign-up_subtitle"> Welcome! To be a part of the PUPR ASCE, you must complete the information below!</h2>
      {/* search on how to have it in the same font letter as the header of the site x2*/}
      <section>
      <div>
        
        <div className="name">
          1. Full Name: <span></span>
        < input type="text" placeholder=" Name" required/>
        </div>

        <span></span>
        <span></span>

        <div className="major">
          2. Bachelor: <span></span>
        <input type="text" placeholder="Bachelor" required/>
        </div>

        <span></span>
        <span></span>

        <div className="aYear">
          3. Academic Year: <span></span>
        <input type="text" placeholder="Academic Year" required/>
        </div>
        
        <span></span>
        <span></span>

        <div className="aDept">
          4. Academic Department: <span></span>
        <input type="text" placeholder="Academic Depaerment"  required/>
        </div>

        <span></span>
        <span></span>

        <div className="age">
          5. Age: <span></span>
        <input type="text" placeholder="Age" required/>  
        </div>                

        <span></span>
        <span></span>

        {/* <div className="sID">
          6. Student ID: <span></span>
          <input type="text" placeholder="Student ID" required/>
         </div>         */}
        
         <span></span>
         <span></span>

        <div className="iEmail">
          6. Institutional Email: <span></span>
          <input type="text" placeholder="@pupr.edu" required/>
        </div>
        
        <span></span>
        <span></span>

        <div className="sizeShirt">
          7. Shirt Size: <span></span>       
            <select required>
              {sizeOptions.map((option => (
                <option value={option.value}>{option.label}</option>)))}
            </select>
          
        </div>

        <span></span>
        <span></span>

        <div className="cellphone">
          8. Phone Number: <span></span>
          <input type="text" placeholder="Phone Number" required/>
        </div>

        <span></span>
        <span></span>

        </div>      
      </section>       
      
      <section>
        <div className="sign-up_button">
        <span></span>
      <span></span>
        {/*This is for the button
        Search on how to change color; style; font letter of this button*/}
        <button type="submit">Submit</button> {/*This button has to be connected to the API*/}
        {/* Search for a somesort of validation on this button */}
        </div>
        <span></span>

        <div> 
        {/* Search on how this can be in italic */}
        <h3>After 'Submit', there will be a fee of $25.00 dollars
        in order to become a member of the PUPR ASCE. 
        The $25.00 dollars are not refundable.
        </h3>
        </div> 
        
        </section> 
    </div>
  );
};

export default template;

// For the questions and texts, find a keyword that separates them
// Search a way to italic the textfield placeholder words
