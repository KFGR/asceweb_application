import "./FormCompetition.css";
import React, { useState } from 'react';



function Template() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ASCEMenber: '',
    ASCENumber: '',
    Weekday: '',
    Competitions: '',
    recentCourse: '',
    Experience: '',
    Travel: '',
    travelJune: '',
    older25: '',
    heavyvehicleLicense: '',
    officialDriver: ''
  });

  

  function checkInputs(name, email, Weekday, recentCourse, Experience, Competitions){
    const regexName = /^([a-zA-Z]+[’'`-]?[a-zA-Z]+[ ]?)+$/;
    const regexEmail = /^[a-zA-Z]+_[0-9]+@students\.pupr\.edu$/;
    const regexText = /['";()&$%~`^*{}\/+=[\\]|<>]/;
    var addError;
    let hasError = false;
  
    if (!regexName.test(name)) {
      addError = document.querySelector('#name');
      addError.classList.add('error');
      addError = document.querySelector('#box1');
      addError.classList.remove('hidden');
      hasError = true;
    }
    if(!regexEmail.test(email)){
      addError = document.querySelector('#email');
      addError.classList.add('error');
      addError = document.querySelector('#box2');
      addError.classList.remove('hidden');
      hasError = true;
    }
    if(regexText.test(Weekday)){
      addError = document.querySelector('#Weekday');
      addError.classList.add('error');
      addError = document.querySelector('#box3');
      addError.classList.remove('hidden');
      hasError = true;
    }
    if(regexText.test(recentCourse)){
      addError = document.querySelector('#recentCourse');
      addError.classList.add('error');
      addError = document.querySelector('#box4');
      addError.classList.remove('hidden');
      hasError = true;
    }
    if(regexText.test(Experience)){
      addError = document.querySelector('#Experience');
      addError.classList.add('error');
      addError = document.querySelector('#box5');
      addError.classList.remove('hidden');
      hasError = true;
    }
    if(Competitions === ""){
      addError = document.querySelector('#selectComp');
      addError.classList.add('error');
      addError = document.querySelector('#box6');
      addError.classList.remove('hidden');
      hasError = true;
    }
    return(!hasError);
  }

  function RemoveError(name){

    if(name === "name"){
      var removeError = document.querySelector('#name')
      removeError.classList.remove('error');
      removeError = document.querySelector('#box1');
      removeError.classList.add('hidden');
    }
    if(name === "email"){
      removeError = document.querySelector('#email')
      removeError.classList.remove('error');
      removeError = document.querySelector('#box2');
      removeError.classList.add('hidden');
    }
    if(name === "Weekday"){
      removeError = document.querySelector('#Weekday')
      removeError.classList.remove('error');
      removeError = document.querySelector('#box3');
      removeError.classList.add('hidden');
    }
    if(name === "recentCourse"){
      removeError = document.querySelector('#recentCourse')
      removeError.classList.remove('error');
      removeError = document.querySelector('#box4');
      removeError.classList.add('hidden');
    }
    if(name === "Experience"){
      removeError = document.querySelector('#Experience')
      removeError.classList.remove('error');
      removeError = document.querySelector('#box5');
      removeError.classList.add('hidden');
    }
    if(name === "Competitions"){
      removeError = document.querySelector('#selectComp')
      removeError.classList.remove('error');
      removeError = document.querySelector('#box6');
      removeError.classList.add('hidden');
    }

  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      const updatedCompetitions = checked
      ? [...formData.Competitions.split(',').filter(comp => comp), value]
      : formData.Competitions.split(',').filter(comp => comp !== value);
    setFormData(prevState => ({ ...prevState, Competitions: updatedCompetitions.join(',') }));
    RemoveError('Competitions');
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
      RemoveError(name);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(checkInputs(formData.name, formData.email, formData.Weekday, formData.recentCourse, formData.Experience, formData.Competitions)){
      // Do something with the form data object
      console.log(formData);
      const formDataJson = JSON.stringify(formData);
      console.log(formDataJson);
    }else{
      console.log('error');
      alert("Input ERROR")
    }

  };
  
  return (
    <>
      <div className="title"><h3>Sign Up for Competitions</h3></div>
      <div className="container-competitionForm">
        <form id="compSignUp" onSubmit={handleSubmit}>

            <div className="questionInput">
                <label htmlFor="name">First and Last name</label>
                <input type="text" placeholder="John Doe" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                <small className="hidden" id="box1">Error Enter a valid name</small>
            </div>

            <div className="questionInput">
                <label htmlFor="email">Student email address </label>
                <input type="email" placeholder="Doe_1234@student.pupr.edu" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                <small className="hidden" id="box2">Error Enter a valid PUPR email</small>
            </div>

            <div className="questionInput">
                <label htmlFor="ASCEMenber">Are you an ASCE Member? </label>
                <div className="radio-option">
                    <input type="radio"  id="ASCEMenber" name="ASCEMenber"  value="YES"   onChange={handleChange} required/>
                    <label htmlFor="ASCEMenber">Yes</label> 
                    <input type="radio"  id="ASCEMenber" name="ASCEMenber" value="NO"  onChange={handleChange} required/>
                    <label htmlFor="ASCEMenber">No</label>
                </div>
            </div>

            <div className="questionInput">
                <label htmlFor="ASCENumber">ASCE Member Number</label>
                <input type="number" placeholder="1234567890" id="ASCENumber" name="ASCENumber"   value={formData.ASCENumber} onChange={handleChange} required/>
                <p id ="note">Note: If you do not have an ASCE Member Number, then please become an official ASCE Member website <a href="https://www.asce.org/" target="_blank">HERE</a></p>
            </div>

            <div className="questionInput">
                <label htmlFor="Weekday">What is your availability</label>
                <textarea name="Weekday" placeholder="Enter Days and Time" id="Weekday" cols="50" rows="8"  value={formData.Weekday} onChange={handleChange} required></textarea>
                <small className="hidden" id="box3">Error do not use special charaters</small>
            </div>

            <div className="questionInput">
                <label htmlFor="selectCompetition">Select the competitions you are interested in participating</label>
                <div className="allCompetitions" id="selectComp">
                <div className="left">
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions"  value="Concret Canoe" checked={formData.Competitions.split(',').includes('Concret Canoe')} onChange={handleChange}/>
                        <p id="checkboxText">Concret Canoe</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Steel Bridge" checked={formData.Competitions.split(',').includes('Steel Bridge')} onChange={handleChange}/> 
                        <p id="checkboxText">Steel Bridge</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Timber Strong" checked={formData.Competitions.split(',').includes('Timber Strong')} onChange={handleChange}/>   
                        <p id="checkboxText">Timber Strong</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Sustainable Solutions" checked={formData.Competitions.split(',').includes('Sustainable Solutions')} onChange={handleChange}/> 
                        <p id="checkboxText">Sustainable Solutions</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Innovation Contest" checked={formData.Competitions.split(',').includes('Innovation Contest')} onChange={handleChange}/>
                        <p id="checkboxText">Innovation Contest</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Construction Institute" checked={formData.Competitions.split(',').includes('Construction Institute')} onChange={handleChange}/>
                        <p id="checkboxText">Construction Institute</p>  
                    </div> 
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Surveying" checked={formData.Competitions.split(',').includes('Surveying')} onChange={handleChange}/>
                        <p id="checkboxText">Surveying</p>  
                    </div> 
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Concrete Bridge" checked={formData.Competitions.split(',').includes('Concrete Bridge')} onChange={handleChange}/>
                        <p id="checkboxText">Concrete Bridge</p>  
                    </div> 
                </div>

                <div className="right">
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Traffic Control" checked={formData.Competitions.split(',').includes('Traffic Control')} onChange={handleChange}/>
                        <p id="checkboxText">Traffic Control</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Geo-Wall" checked={formData.Competitions.split(',').includes('Geo-Wall')} onChange={handleChange}/> 
                        <p id="checkboxText">Geo-Wall</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Muddy Waters" checked={formData.Competitions.split(',').includes('Muddy Waters')} onChange={handleChange}/>   
                        <p id="checkboxText">Muddy Waters</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Concrete Cornhole" checked={formData.Competitions.split(',').includes('Concrete Cornhole')} onChange={handleChange}/> 
                        <p id="checkboxText">Concrete Cornhole</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Plans Reading" checked={formData.Competitions.split(',').includes('Plans Reading')} onChange={handleChange}/>
                        <p id="checkboxText">Plans Reading</p>  
                    </div>
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Professional Paper" checked={formData.Competitions.split(',').includes('Professional Paper')} onChange={handleChange}/>
                        <p id="checkboxText">Professional Paper</p>  
                    </div> 
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="T-shirt Contest" checked={formData.Competitions.split(',').includes('T-shirt Contest')} onChange={handleChange}/>
                        <p id="checkboxText">T-shirt Contest</p>  
                    </div> 
                    <div className="Competition">
                        <input type="checkbox" name="selectCompetitions" value="Mystery Competition" checked={formData.Competitions.split(',').includes('Mystery Competition')} onChange={handleChange}/>
                        <p id="checkboxText">Mystery Competition</p>  
                    </div> 
                </div>
                </div>
                <small className="hidden" id="box6">Error Select at least one competition</small>
            </div>

            <div className="questionInput">
                <label htmlFor="recentCourse">Enter 3 or more of the most recent course you have taken</label>
                <textarea name="recentCourse" placeholder="Text Here" id="recentCourse" cols="30" rows="10" value={formData.recentCourse} onChange={handleChange} required></textarea>
                <small className="hidden" id="box4">Error do not use special charaters</small>
            </div>
            <div className="questionInput">
                <label htmlFor="Experience">Write any experience current or past that you have aquired such as Jobs, Internship, Construction Knowledge, etc</label>
                <textarea name="Experience" placeholder="Text Here" id="Experience" cols="30" rows="10" value={formData.Experience} onChange={handleChange} required></textarea>
                <small className="hidden" id="box5">Error do not use special charaters</small>
            </div>

            <div className="questionInput">
                <label htmlFor="Travel">Are you willing to travel?</label>
                <div className="radio-option">
                    <input type="radio" placeholder="Test" name="Travel" value="YES"   onChange={handleChange} required/>
                    <label htmlFor="Travel">Yes</label> 
                    <input type="radio" placeholder="Test" name="Travel" value="NO"  onChange={handleChange} required/>
                    <label htmlFor="Travel">No</label>
                </div>
            </div>

            <div className="questionInput">
                <label htmlFor="travelJune">Are you willing to travel in June?</label>
                <div className="radio-option">
                    <input type="radio" placeholder="Test" name="travelJune" value="YES"  onChange={handleChange} required/>
                    <label htmlFor="travelJune">Yes</label> 
                    <input type="radio" placeholder="Test" name="travelJune" value="NO"  onChange={handleChange} required/>
                    <label htmlFor="travelJune">No</label>
                </div>
            </div>
            <div className="questionInput">
                <label htmlFor="older25">Are you 25 years old or older?</label>
                <div className="radio-option">
                    <input type="radio" placeholder="Test" name="older25" value="YES"  onChange={handleChange} required/>
                    <label htmlFor="older25">Yes</label> 
                    <input type="radio" placeholder="Test" name="older25" value="NO"   onChange={handleChange} required/>
                    <label htmlFor="older25">No</label>
                </div>
            </div>
            <div className="questionInput">
                <label htmlFor="heavyvehicleLicense">Do you have a heavy vehicle license?</label>
                <div className="radio-option">
                    <input type="radio" placeholder="Test" name="heavyvehicleLicense" value="YES"  onChange={handleChange} required/>
                    <label htmlFor="heavyvehicleLicense">Yes</label> 
                    <input type="radio" placeholder="Test" name="heavyvehicleLicense" value="NO"  onChange={handleChange} required/>
                    <label htmlFor="heavyvehicleLicense">No</label>
                </div>
            </div>
            <div className="questionInput">
                <label htmlFor="officialDriver">Would you like to be official diver of the PUPR ASCE Student Chapter?</label>
                <div className="radio-option">
                    <input type="radio" placeholder="Test" name="officialDriver"  onChange={handleChange} value="YES" required/>
                    <label htmlFor="officialDriver">Yes</label> 
                    <input type="radio" placeholder="Test" name="officialDriver"  onChange={handleChange} value="NO" required/>
                    <label htmlFor="officialDriver">No</label>
                </div>
            </div>
            <input type="submit" id="button" value="Submit"/>
        </form>
    </div>
    </>
  );
};

export default Template;

