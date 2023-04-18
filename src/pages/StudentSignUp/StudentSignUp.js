import React    from "react";
import template from "./StudentSignUp.jsx";

const form = document.getElementById('asce-sign-up');
const email = document.getElementById('@students.pup.edu');
// const name = document.getElementById('name');

form.addEventListener('submit', e =>{
  e.preventDefault();

  validateInputs(); 
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const emailValue = email.value.trim();
  // const nameValue = name.value.trim();

  // if (nameValue === '') {
  //   setError(name, 'Name is required');
  // } else{
  //     setSuccess(name);
  // }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email adress');
  } else{
    setSuccess(email);
  }
}

class StudentSignUp extends React.Component {
  render() {
    return template.call(this);
  }
}

export default StudentSignUp;
