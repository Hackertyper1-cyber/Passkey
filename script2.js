const password =
document.getElementById("password");

const fill =
document.getElementById("fill");

const message =
document.getElementById("message");

const toggleBtn =
document.getElementById("toggleBtn");

const lengthText =
document.getElementById("length");

const uppercaseText =
document.getElementById("uppercase");

const numberText =
document.getElementById("number");

const symbolText =
document.getElementById("symbol");

const generateBtn =
document.getElementById("generateBtn");

const lengthSelect =
document.getElementById("lengthSelect");

const typeSelect =
document.getElementById("typeSelect");

toggleBtn.addEventListener(
"click",
() => {

    if(password.type==="password"){
        password.type="text";
        toggleBtn.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';
    }
    else{
        password.type="password";
        toggleBtn.innerHTML =
        '<i class="fa-solid fa-eye"></i>';
    }

});

function checkPassword(){

    const value =
    password.value;

    const hasLength =
    value.length >= 8;

    const hasUpper =
    /[A-Z]/.test(value);

    const hasNumber =
    /[0-9]/.test(value);

    const hasSymbol =
    /[^A-Za-z0-9]/.test(value);

    let score = 0;

    if(hasLength) score++;
    if(hasUpper) score++;
    if(hasNumber) score++;
    if(hasSymbol) score++;

    lengthText.innerHTML =
    `${hasLength ? "✅" : "❌"} 8+ characters`;

    uppercaseText.innerHTML =
    `${hasUpper ? "✅" : "❌"} Uppercase`;

    numberText.innerHTML =
    `${hasNumber ? "✅" : "❌"} Number`;

    symbolText.innerHTML =
    `${hasSymbol ? "✅" : "❌"} Symbol`;

    if(value.length===0){

        fill.style.width="0%";
        message.textContent =
        "Password Strength";

        return;
    }

    if(score<=1){

        fill.style.width="33%";
        fill.style.background="#ff4d4d";
        message.textContent =
        "Weak Password";
    }
    else if(score<=3){

        fill.style.width="66%";
        fill.style.background="#ffc107";
        message.textContent =
        "Medium Password";
    }
    else{

        fill.style.width="100%";
        fill.style.background="#28c76f";
        message.textContent =
        "Strong Password";
    }
}

password.addEventListener(
"input",
checkPassword
);

generateBtn.addEventListener(
"click",
() => {

    const length =
    Number(lengthSelect.value);

    const type =
    typeSelect.value;

    const letters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbers =
    "0123456789";

    const symbols =
    "!@#$%^&*()_+-=[]{}?";

    let chars =
    letters + numbers;

    if(type==="symbols"){
        chars += symbols;
    }

    let newPassword = "";

    for(let i=0;
        i<length;
        i++){

        const random =
        Math.floor(
            Math.random() *
            chars.length
        );

        newPassword +=
        chars[random];
    }

    password.value =
    newPassword;

    checkPassword();
});