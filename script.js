const password = document.getElementById("password");
const fill = document.getElementById("fill");
const message = document.getElementById("message");
const toggleBtn = document.getElementById("toggleBtn");

const lengthText = document.getElementById("length");
const uppercaseText = document.getElementById("uppercase");
const numberText = document.getElementById("number");
const symbolText = document.getElementById("symbol");

/* Show/Hide Password */
toggleBtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggleBtn.innerHTML =
      '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    password.type = "password";
    toggleBtn.innerHTML =
      '<i class="fa-solid fa-eye"></i>';
  }
});

/* Strength Checker */
password.addEventListener("input", () => {

  const value = password.value;

  const hasLength = value.length >= 8;
  const hasUppercase = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSymbol = /[^A-Za-z0-9]/.test(value);

  let score = 0;

  if (hasLength) score++;
  if (hasUppercase) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;

  lengthText.textContent =
    `${hasLength ? "✅" : "❌"} At least 8 characters`;

  uppercaseText.textContent =
    `${hasUppercase ? "✅" : "❌"} One uppercase letter`;

  numberText.textContent =
    `${hasNumber ? "✅" : "❌"} One number`;

  symbolText.textContent =
    `${hasSymbol ? "✅" : "❌"} One special character`;

  if (value.length === 0) {
    fill.style.width = "0%";
    message.textContent = "Password Strength";
  }
  else if (score <= 1) {
    fill.style.width = "33%";
    fill.style.background = "#ff4d4d";
    message.textContent = "Weak Password";
  }
  else if (score <= 3) {
    fill.style.width = "66%";
    fill.style.background = "#ffc107";
    message.textContent = "Medium Password";
  }
  else {
    fill.style.width = "100%";
    fill.style.background = "#28c76f";
    message.textContent = "Strong Password";
  }
});
generateBtn.addEventListener("click", () => {

  const length = Number(lengthSelect.value);
  const type = typeSelect.value;

  const letters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const numbers = "0123456789";

  const symbols =
    "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = letters + numbers;

  if (type === "symbols") {
    characters += symbols;
  }

  let passwordValue = "";

  for (let i = 0; i < length; i++) {
    const randomIndex =
      Math.floor(Math.random() * characters.length);

    passwordValue +=
      characters[randomIndex];
  }

  generatedPassword.value =
    passwordValue;

  password.value =
    passwordValue;

  password.dispatchEvent(
    new Event("input")
  );
});