// Get form container, form, and input elements
let formContainer = document.getElementById("container");
let form = document.querySelector(".form");
let nameInp = document.querySelector(".name");
let passwordInp = document.querySelector(".password");

// Add event listener to the form for submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Get the values of email and password inputs
  let emailInp = document.querySelector(".email").value;
  let passwordInp = document.querySelector(".password").value;

  // Validate email
  let status = emailValidator(emailInp);
  if (status !== "valid") {
    alert(status); // Display validation message as alert
  }

  // Validate password
  let passwordStatus = validatePassword(passwordInp);
  if (passwordStatus !== "valid") {
    alert(passwordStatus); // Display validation message as alert
  }
});

// Function to validate email
function emailValidator(email) {
  if (email.length == 0) {
    return "Please enter your email";
  }

  // Check if email contains only allowed characters
  if (!isValidEmail(email)) {
    return "Please enter a valid email. Only allows character, digit, underscore, dot, @ and dash ";
  }

  // Check for various email format rules
  if (email.indexOf("@") == -1) {
    return "@ is not present";
  }
  if (email.indexOf("@") + 1 == email.lastIndexOf(".")) {
    return "Domain can not start with dot .";
  }
  if (email.indexOf("@") == 0) {
    return "No character before @";
  }
  if (email.lastIndexOf(".") + 2 == email.length) {
    return `${
      email[email.length - 2] + email[email.length - 1]
    } is not a valid TLD `;
  }
  if (email[email.indexOf("@") + 1] == ".") {
    return "Domain can not start with dot .";
  }
  if (email.indexOf(".") == -1) {
    return " . is not present";
  }
  if (email.indexOf(".") == 0) {
    return "An email should not start with dot .";
  }
  if (email.lastIndexOf(".") + 1 == email.length) {
    return "Email should not end with .";
  }
  if (email[email.indexOf(".")] == email[email.indexOf(".") + 1]) {
    return "Double dots are not allowed ";
  }

  return "valid";
}

// Function to check if email contains only allowed characters
function isValidEmail(email) {
  const allowedChars = new Set(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.@"
  );

  for (let i = 0; i < email.length; i++) {
    const char = email.charAt(i);
    if (!allowedChars.has(char)) {
      return false;
    }
  }

  return true;
}

// Function to validate password
function validatePassword(password) {
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecialCharacter = false;

  if (password.length <= 6) {
    return "Password length should be greater than 6";
  }

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    } else if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if ("!@#$%^&*()_+{}[]|;:,.<>?".includes(char)) {
      hasSpecialCharacter = true;
    }
  }

  if (!hasUpperCase) {
    return "Password must contain at least one uppercase letter";
  }
  if (!hasLowerCase) {
    return "Password must contain at least one lowercase letter";
  }
  if (!hasNumber) {
    return "Password must contain at least one numeric digit";
  }
  if (!hasSpecialCharacter) {
    return "Password must contain at least one special character";
  }

  return "valid";
}
