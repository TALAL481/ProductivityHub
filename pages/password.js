const passwordDisplay = document.getElementById("passwordDisplay");

const length = document.getElementById("length");

const uppercase = document.getElementById("uppercase");

const lowercase = document.getElementById("lowercase");

const numbers = document.getElementById("numbers");

const symbols = document.getElementById("symbols");

const generate = document.getElementById("generate");

const copy = document.getElementById("copy");

const strength = document.getElementById("strength");

function generatePassword() {

let chars = "";

if (uppercase.checked) {

  chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

}

if (lowercase.checked) {

  chars += "abcdefghijklmnopqrstuvwxyz";

}

if (numbers.checked) {

  chars += "0123456789";

}

if (symbols.checked) {

  chars += "!@#$%^&*()_+-={}[]<>?";

}

let password = "";

for (let i = 0; i < length.value; i++) {

  password += chars[Math.floor(Math.random() * chars.length)];

}

passwordDisplay.textContent = password;

checkStrength(password);

}

function checkStrength(password) {

let score = 0;

if (password.length >= 8) score++;

if (password.length >= 16) score++;

if (/[A-Z]/.test(password)) score++;

if (/[0-9]/.test(password)) score++;

if (/[^A-Za-z0-9]/.test(password)) score++;

let result = "";

if (score <= 2) {

  result = "Weak 😭";

}

else if (score <= 4) {

  result = "Medium 😎";

}

else {

  result = "Strong 🔥";

}

strength.textContent = "Strength: " + result;

}

generate.onclick = generatePassword;

copy.onclick = function() {

navigator.clipboard.writeText(passwordDisplay.textContent);

copy.textContent = "Copied ✅";

setTimeout(() => {

  copy.textContent = "Copy 📋";

}, 1500);

};

generatePassword();
