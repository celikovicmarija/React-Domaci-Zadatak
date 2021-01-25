import React,{useState} from "react";
import "../css/Form.css"
//import { Router, Route, Link } from 'react-router'

export default function Form() {
  const [values, setValues]=useState({
    firstName:"",
    lastName: "",
    email:"",
  });

  const [submitted, setSubmitted]=useState(false)
  const [valid, setValid]=useState(false);

  const handleFirstNameInputChange=(event)=>{
    setSubmitted(false)
    setValues({...values,firstName:event.target.value})
  }
  const handleLastNameInputChange=(event)=>{
    setSubmitted(false)
    setValues({...values,lastName:event.target.value})
  }
  const handleEmailInputChange=(event)=>{
    setSubmitted(false)
    setValues({...values,email:event.target.value})
  }
  const handleSumbit=(event)=>{
    event.preventDefault();
    if (values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);

  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSumbit}>

        { submitted && valid? <div class="success-message">Success! Thank you for registering</div>:null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName? <span id="first-name-error">Please enter a first name</span> :null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName?<span id="last-name-error">Please enter a last name</span>:null }
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email?<span id="email-error">Please enter an email address</span> :null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}