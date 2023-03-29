// Contact Form
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Your validation code here
    if (!validateForm()) {
      event.preventDefault();
    }
  });

// Function to validate email addresses
function isValidEmail(email) {
  // Define the JS Regex pattern for a valid email address
  var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  // Test the email against the pattern and return the result (true or false)
  return emailRegex.test(email);
}

// Function to validate phone numbers
function isValidPhoneNumber(phone) {
  // Define the JS Regex pattern for a valid 10-digit phone number
  var phoneRegex = /^\d{10}$/;

  // Test the phone number against the pattern and return the result (true or false)
  return phoneRegex.test(phone);
}

// Function to validate the contact form
function validateForm() {
  // Get the values entered in the form fields
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;

  // Check if the required fields (name, email, and message) are empty
  // If any of them are empty, return false to prevent form submission
  if (!name || !email || !message) {
    return false;
  }

  // Check if the email is valid using the isValidEmail function
  // If the phone field is not empty, also check if it is valid using the isValidPhoneNumber function
  // If either the email or the phone number is invalid, return false to prevent form submission
  if (!isValidEmail(email)) {
    return false;
  }

  // If all the validations pass, return true to allow form submission
  return true;
}

// Function to display an error message on the web page
function displayError(message) {
  // Get the HTML element with the "error" ID to display the error message
  var errorElement = document.getElementById("error");

  // Set the innerHTML of the error element to the provided error message
  errorElement.innerHTML = message;

  // Change the display style of the error element to "block" to make it visible
  errorElement.style.display = "block";
}

const nameError = document.getElementById("name-error");
nameField.addEventListener("blur", function () {
  const enteredText = nameField.value;
  if (enteredText.length == 0) {
    nameError.textContent = "Name Field Can't be Empty";
    nameField.classList.add("input-error-styling");

    nameField;
  } else {
    nameError.textContent = "";
    nameField.classList.remove("input-error-styling");
  }
});

const emailError = document.getElementById("email-error");
emailField.addEventListener("blur", function () {
  const enteredText = emailField.value;
  if (enteredText.length == 0) {
    emailError.textContent = "Email Field Can't be Empty";
    emailField.classList.add("input-error-styling");

    emailField;
  } else if (!isValidEmail(enteredText)) {
    emailError.textContent = "Sorry, invalid format here";
    emailField.classList.add("input-error-styling");
  } else {
    emailError.textContent = "";
    emailField.classList.remove("input-error-styling");
  }
});

const messageError = document.getElementById("message-error");
messageField.addEventListener("blur", function () {
  const enteredText = messageField.value;
  if (enteredText.length == 0) {
    messageError.textContent = "Message Field Can't be Empty";
    messageField.classList.add("input-error-styling");

    messageField;
  } else {
    messageError.textContent = "";
    messageField.classList.remove("input-error-styling");
  }
});
