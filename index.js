/*  
    Joshua A. Carlos 2023-02928
    CMSC 100 U-4L
    Exercise 3: JavaScript Basics Part 1

    This program contains three functions: 
    validPassword(string1, string2) - This function takes two strings as input and returns true if the strings are equal, 
    is greater than 8 characters, has one uppercase, lowercase, and numeric character. Otherwise, it returns false.

    reversePassword(string) - This function takes a string as input and returns the string in reverse order.

    storePassword(name, password1, password2) - This function takes a name and two strings as input and returns an object 
    with the name and newPassword key-value pairs. If the password is valid, the newPassword is the reverse of password1. 
    Otherwise, the newPassword is password1.
 */

function validatePassword(string1, string2) {
    let numCheck = false; // variable to check if there is a number in the string
    let upperCheck = false; // variable to check if there is an uppercase letter in the string
    let lowerCheck = false; // variable to check if there is a lowercase letter in the string

    for (let i = 0; i < string1.length; i++) {
        if (!isNaN(string1[i])) { numCheck = true; }; // condition to check if the character is numeric
        if (string1[i] == string1[i].toUpperCase()) { upperCheck = true;}; // condition to check if the character is uppercase
        if (!(string1[i] == string1[i].toUpperCase())) { lowerCheck = true;}; // condition to check if the character is lowercase
    }

    // console.log(numCheck, upperCheck, lowerCheck);
    // returns true if string1 and string2 are equal and string1 is greater than or equal to 8 characters
    return (string1.localeCompare(string2) == 0 && string1.length >= 8 && numCheck && upperCheck && lowerCheck) ? true : false;
}

function reversePassword(string) {
    let newString = ""; // variable to store the reversed string
    for (let i = 0; i < string.length; i++) {
        newString += string[string.length - 1 - i]; // concatenates the characters of the string in reverse order
    }

    return newString;
}

function storePassword(name, password1, password2) {
    let newPassword = (validatePassword(password1, password2)) ? reversePassword(password1) : password1; // if the password is valid, reverse the password, else store the password as is
    return passwordObject = {
        name : name,
        newPassword : newPassword,
    }; // returns the object with the name and newPassword key-value pairs
}

/* TEST CASES
const string1 = "A125125251jslgjalg!w";
const string2 = "A125125251jslgjalg!w";
const string3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const string4 = "Pass123"
const string5 = "Pass12345"
console.log(storePassword("Joshua", string4, string5));
console.log(reversePassword(string3));
console.log(validatePassword(string1, string2)); 
*/