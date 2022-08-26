# [Prototype Professional Portfolio][portfolio]

An updated version of my [portfolio][portfolio] to be prepared for use in the future. It is expected to receive more changes and alterations in the future once I've developed my skills, and have more projects under my belt to showcase.

## Table of Contents

- [Technologies](#technologies)
- [Code Snippets](#code-snippets)
- [Credits](#credits)

## Technologies Used

- HTML
- CSS
- Bootstrap
- Javascript
- Node.js
- Express.js
- React

## Code Snippets

One new change to the portfolio page is an option to enter contact information, and here's two important functions in handling it.

```java
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
```

```java
const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (page refreshing)
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
```

[portfolio]: https://github.com/C-K999/portfolio-updated

---

© 2022 Clement Koo
[LinkdIn](https://www.linkedin.com/in/clement-t-k-459322138/) |
[GitHub](https://github.com/C-K999) All Rights Reserved.
