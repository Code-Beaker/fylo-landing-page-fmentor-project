import validator from "validator";
import isEmail from "validator/lib/isEmail";

const form = document.querySelector(".hero__form-flex");
const emailInput = document.querySelector("#heroTextInput");
const emailStatus = document.querySelector(".email-status");

const messages = {
  error: "Please enter a valid email!",
  success: "Success! Please check your inbox...",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validator.isEmail(emailInput.value)) {
    emailStatus.classList.add("status-error");
    emailStatus.textContent = messages.error;
  } else {
    emailStatus.classList.add("status-success");
    emailStatus.textContent = messages.success;
  }
});
