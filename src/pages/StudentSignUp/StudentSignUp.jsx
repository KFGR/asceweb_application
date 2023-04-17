import "./StudentSignUp.css";
import React from "react";

const sizeOptions = [
  {label: "--------------", value: ""},
  {label: "Small", value: "S"},
  {label: "Medium", value: "M"},
  {label: "Large", value: "L"},
  {label: "Extra-Large", value: "XL"},
]
//TO-DO:
//find a way to validate inputs
//find a way to have it more centered that it already is
function template() {
  return (
    <form className="asce-sign-up">
    <div className="student-sign-up">
      <h1 className = "sign-up_title"> PUPR ASCE Chapter Sign Up</h1>
      <h2 className="ign-up_subtitle"> Welcome! To be a part of the PUPR ASCE, you must complete the information below!</h2>
      
      <section>
      <div className="row align-text-center col-12">
        
        <div className="col-6">
          1. Full Name: <span></span>
        <input type="text" placeholder="Full Name" id="name" name="name" required/>
        </div>

        <span></span>
        <span></span>

        <div className="major">
          2. Bachelor: <span></span>
        <input type="text" placeholder="Bachelor" id="bachelor" name="bachelor" namerequired/>
        </div>

        <span></span>
        <span></span>

        <div className="col-6">
          3. Academic Year: <span></span> 
        <input type="text" placeholder="Academic Year" id="a-year" name="a-year" required/>
        </div>
        
        <span></span>
        <span></span>

        <div className="a-dept">
          4. Academic Department: <span></span>
        <input type="text" placeholder="Academic Depaerment" id="a-dept" name="a-dept" required/>
        </div>

        <span></span>
        <span></span>

        <div className="col-6">
          5. Age: <span></span> 
          <input type="text" placeholder="Age" id="age" name="age"  required/>
          </div>                

        <span></span>
        <span></span>

        <div className="email">
          6. Institutional Email: <span></span>
          <input type="text" placeholder="@students.pupr.edu" id="@students.pupr.edu" name="@students.pupr.edu" required/>
        </div>
        
        <span></span>
        <span></span>

        <div className="col-6">
          7. Shirt Size: <span></span>       
            <select id="shirt-size" name="shirt-size" required>
              {sizeOptions.map((option => (
                <option value={option.value}>{option.label}</option>)))}
            </select>
          </div>

        <span></span>
        <span></span>

        <div className="cellphone">
          8. Phone Number: <span></span>
          <input type="text" placeholder="Phone Number" id="phone" name="phone" required/>
        </div>

        <span></span>
        <span></span>

        </div>      
      </section>       
      
      <section>
        <div className="sign-up_button">
        <span></span>
        <span></span>
          <button type="submit" class="btn btn-primary">Submit</button> 
          {/*This button has to be connected to the API*/}
          {/* Search for a somesort of validation on this button */}
          </div>
          <span></span>

        <div>
        <h3>After 'Submit', there will be a fee of $25.00 dollars
        in order to become a member of the PUPR ASCE. 
        The $25.00 dollars are not refundable.
        </h3>
        </div> 
        
        </section> 
    </div>
    </form>
  );
};

export default template;

// For the questions and texts, find a keyword that separates them
