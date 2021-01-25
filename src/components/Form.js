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
    }else{
      setValid(false);
    }
    setSubmitted(true);

  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSumbit}>

        { submitted && valid? <div class="success-message">Uspešno! Zahvaljujemo se na povratnoj informaciji.</div>:null}

        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Ime"
          name="firstName"
        />
        {submitted && !values.firstName? <span id="first-name-error">Molimo unesite ime</span> :null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Email adresa"
          name="lastName"
        />
        {submitted && !values.lastName?<span id="last-name-error">Molimo email adresu</span>:null }
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          className="poruka"
          type="text"
          placeholder="Poruka"
          name="email"
        />
        {submitted && !values.email?<span id="email-error">Molimo unesite poruku</span> :null}
        <button class="form-field" type="submit">
          Pošalji
        </button>
      </form>
    </div>
  );
}