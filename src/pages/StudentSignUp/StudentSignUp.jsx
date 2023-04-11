import "./StudentSignUp.css";
import React from "react";

function template() {
  return (
    <div className="student-sign-up">
      <h1 className = "classHeaderOne" > PUPR ASCE Chapter Sign Up</h1>
      <h2> Welcome! To be a part of the PUPR ASCE, you must complete the information below!:</h2>

    <section>
      <div>
        
        <input type="text" placeholder="1. Name: " />
        <input type="text" placeholder="2. Bachelor: "/>
        <input type="text" placeholder="3. Academic Year: " />
        <input type="text" placeholder="4. Academic Depaerment: "/>
        <input type="text" placeholder="5. Age: "/>
        <input type="text" placeholder="6. Student ID: "/>
        <input type="text" placeholder="7. Institutional Email: "/>
       
        {/*This is for the shirt size selecrion */}
        <div>
          <label htmlFor=" 8. Shirt Size"> Select an option:</label>
          <select name="dropdownMenu" id={selectedOption} onChange={handledOptionChanged}> 
          <option value="S"> Option 1</option>
          <option value="M"> Option 2</option>
          <option value="L"> Option 3</option>
          <option value="XL"> Option 4</option>
          </select>
          <p>Selected: {selectedOption}</p>
        </div>
        <input type="text" placeholder="9. Phone Number: "/>
        </div>      
      </section>    

      <section>
        
        {/*This is for the button*/}
        <button type="submit">Submit</button> {/*This button has to be connected to the API*/}

        <label htmlFor="After 'Submit', there will be a fee of $25.00 dollars
                        in order to become a member of the PUPR ASCE. 
                        The $25.00 dollars are not refundable."></label>
        </section> 
    </div>
  );
};

export default template;
