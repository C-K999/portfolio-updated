import React, { useState } from "react";
import "../App.css";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkNumber(input) {
  const no = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  if (input.match(no)) {
    return true;
  }
  return false;
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setPhone(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check to see if the email is not valid or if the name is empty
    if (!validateEmail(email) || !name) {
      setErrorMessage("Please enter a valid name and email.");
      // Exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!checkNumber(phoneNumber)) {
      setErrorMessage(`That is not a valid number.`);
      return;
    }

    // Clear input if successful
    setName("");
    setPhone("");
    setEmail("");
    alert(`Hello ${name}`);
  };

  return (
    <article id="contact" class="contact">
      <h2>Contact Me</h2>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br></br>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <br></br>
        <input
          value={phoneNumber}
          name="phoneNumber"
          type="phoneNumber"
          onChange={handleInputChange}
          placeholder="Contact Number"
        />
        <br></br>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </article>
  );
}

export default Contact;
