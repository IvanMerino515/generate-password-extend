const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]:;<>,.?/";

const passwordContent = document.getElementById('passwordContent');
const range = document.getElementById('range');
const lengthNumber = document.getElementById('lengthNumber');
const generateButton = document.getElementById('button');

const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

range.addEventListener('input', () => {
    lengthNumber.textContent = range.value;
});

const checkButtonState = () => {
    generateButton.disabled = !(
        includeUppercase.checked ||
        includeLowercase.checked ||
        includeNumbers.checked ||
        includeSymbols.checked
    );
};

[includeUppercase, includeLowercase, includeNumbers, includeSymbols].forEach(option => {
    option.addEventListener('change', checkButtonState);
});

const generatePassword = (length) => {
    let characterSet = "";
    if (includeUppercase.checked) characterSet += uppercaseChars;
    if (includeLowercase.checked) characterSet += lowercaseChars;
    if (includeNumbers.checked) characterSet += numberChars;
    if (includeSymbols.checked) characterSet += symbolChars;

    if (characterSet === "") return ""; 
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    return password;
};

generateButton.addEventListener('click', () => {
    const passwordLength = parseInt(range.value, 10);
    const newPassword = generatePassword(passwordLength);
    passwordContent.value = newPassword;
});


checkButtonState();
