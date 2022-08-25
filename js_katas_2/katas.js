/*
Write JavaScript program that accepts a sentence and calculate the number of words, digits, uppercase letters and lowercase letters.
*/
// Code starts here
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const upperChar = -[];
const numero = [];
const lowerChar = -[];
const specialChar = -[];
const stringChar = (str) => {
    for (char of str) {
        if (char.includes(lowercase)) {
            lowerChar.push(char)
        }
        else if (char.includes(uppercase)) {
            upperChar.push(char)
        }
    }
else if (Number(char !== NaN)) {
    numero.push(char)
}}
stringChar()
// Code ends here/*
/*
Write JavaScript program to convert uppercase letters to lowercase and vice versa.
*/
// Code starts here
const charinput = (typedIn) => {
    const capitalLetters = typedIn.toUpperCase();
    const smallLetters = typedIn.toLowerCase();
}
charInput()
// Code ends here/*
/*
Write Javascript Program to count the number of times an item appears in an array.
}
*/
// Code starts here
const noItems = (paramtr) => {
    const itemsAppear = paramtr.length
}
// Code ends here/*
/*
Write a Javascript program to check the validity of a password given by the user.
The Password should satisfy the following criteria:
1. Contain at least 1 letter between a and z
2. Contain at least 1 number between 0 and 9
3. Contain at least 1 letter between A and Z
4. Contain at least 1 character from $, #, @
5. Minimum length of password: 6
6. Maximum length of password: 12
*/
// Code starts here
const lettr = []
const num = []
const captl = []
const charactr = []
const lettrs = "abcdefghijklmnopqrstuvwxyz"
const uppLettrs = lettrs.toUppercase()
const specialCharacr = "!@#$%^&*()_+":?>< "
const password = (passwrd) => {
    for (char of passwrd) {
        if (char.includes(lettrs)) {
            lettr.push(char)
        }
        else if (char.includes(uppLettrs)) {
            capt.push(char)
        }
        else if (Number(char !== NaN)) {
            num.push(char)
        }
        else if (char.includes(specialCharacr)) {
            charactr.push(char)
        }
    }

// Code ends here/*



