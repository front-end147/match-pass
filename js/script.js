// create variable of eye icon
const passHide = document.getElementById("passHide"),
      c_passHide = document.getElementById("c_passHide");
// create variables of input of form
const passwordInput = document.getElementById("password"),
      c_passwordInput = document.getElementById("c_password");
// create variables of error text and check button
const errorIcon = document.querySelector(".errorIcon"),
      errorText = document.querySelector(".text"),
      checkBtn = document.querySelector("#btn");

// change the type of input when clicking on show password icon
passHide.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passHide.classList.replace("fa-eye-slash", "fa-eye");
  }
  else {
    passwordInput.type = "password";
    passHide.classList.replace("fa-eye", "fa-eye-slash");
  }
});
c_passHide.addEventListener("click", () => {
  if (c_passwordInput.type === "password") {
    c_passwordInput.type = "text";
    c_passHide.classList.replace("fa-eye-slash", "fa-eye");
  }
  else {
    c_passwordInput.type = "password";
    c_passHide.classList.replace("fa-eye", "fa-eye-slash");
  }
});

// check what the user input to enable the other input
passwordInput.addEventListener("input", () => {
  let inputValue = passwordInput.value.trim(); // count only one space in input
  if (inputValue.length >= 8) {
    c_passwordInput.removeAttribute("disabled");
    checkBtn.removeAttribute("disabled");
  }
  else {
    c_passwordInput.value = "";
    c_passwordInput.setAttribute("disabled", true);
    checkBtn.setAttribute("disabled", true);
    errorText.innerText = "Enter at least 8 character";
    errorText.style.color = "#a6a6a6";
    errorIcon.style.display = "none";
  }
});

// check if the password inputs are match or not
checkBtn.addEventListener("click", () => {
  if (passwordInput.value === c_passwordInput.value) {
    errorText.innerText = "Password match correctly";
    errorText.style.color = "#4070f4";
    errorIcon.style.display = "none";
  }
  else {
    errorText.innerText = "Password don't match!";
    errorText.style.color = "#d93025";
    errorIcon.style.display = "inline-block";
  }
});