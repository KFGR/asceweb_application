import React    from "react";
import template from "./StudentSignUp.jsx";

//const formData = document.getElementById('asce-sign-up').value;
// const name = document.getElementById('name').value;
// const bachelor = document.getElementById('bachelor').value;
// const year = document.getElementById('year').value;
// const department = document.getElementById('department').value;
// const age = document.getElementById('age').value;
// const email = document.getElementById('email').value;
// const size = document.getElementById('size').value;
// const cellphone = document.getElementById('cellphone').value;

// const formData = {
//   name: name,
//   bachelor: bachelor,
//   year: year,
//   department: department,
//   age: age,
//   email: email,
//   size: size,
//   cellphone: cellphone,
// };

// console.log(formData);

// const formToJason = JSON.stringify(formData);
// console.log(formToJason);

class StudentSignUp extends React.Component {
  render() {
    return template.call(this);
  }
}

export default StudentSignUp;
