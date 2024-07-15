// ******************************* Activity 1 
// **********************************Task 1************
let numOne = 12

let number = numOne > 0 ? "Number is +ve"
    : numOne < 0 ? "Number is -ve " : "Number is a zero.";
console.log(number); // its a way to code with else if ... ther is something else wher we can use just if else 


//****************** Task 2 *************************************

let dlAge = 18;
let res = dlAge >= 18 ? "You can drive." : "You can't drive"; // It's called ternery operator .
console.log(res);

// if (dlAge>=18)
// {
//     console.log("You can drive.");           //This is the traditional way for if else.
// }
// else 
// {
//     console.log("You can't drive.");
// }

// **********************Activity 2*****************************
//**************************Task: 3******************************

let inputOne = 22
let inputTwo = 33
let inputThree = 4

// if (inputOne > inputTwo && inputOne> inputThree)
// {
//     console.log(`${inputOne} is the largest number. `);
// }
// else if (inputTwo > inputOne && inputTwo > inputThree)
// {
//     console.log(`${inputTwo} is the largest number. `);
// }
// else
// {
//     console.log(`${inputThree} is the largest number`);
// }

let large = inputOne > inputTwo && inputOne > inputThree ? console.log(`${inputOne} is the largest number.`)
    : inputTwo > inputOne && inputTwo > inputThree ? console.log(`${inputTwo} is the largest number.`) : console.log(`${inputThree} is the largest number.`);

//********************************Activity 3 ******************************* */
//**********************************Task4*************************************** */

let day = 3
switch (day) {
    case 1:
        console.log(`The given input ${day} is Monday`);
        break;
    case 2:
        console.log(`The given input ${day} is Tuesday`);
        break;
    case 3:
        console.log(`The given input ${day} is Wednesday`);
        break;
    case 4:
        console.log(`The given input ${day} is Thursday`);
        break;
    case 5:
        console.log(`The given input ${day} is Friday`);
        break;
    case 6:
        console.log(`The given input ${day} is Saturday`);
        break;
    case 7:
        console.log(`The given input ${day} is Sunday`);
        break;
    default:
        console.log("Enter a valid day.");
        break;
}
// *****************************Task 5*************************

// let Score =60
// switch (Score) {
//     case Score >= 80 && Score <= 100:
//         console.log("Your Grade is A")
//         break;
//     case Score >= 70 && Score < 80:
//         console.log("Your Grade is A")
//         break;
//     case Score >= 60 && Score < 70:
//         console.log("Your Grade is A")
//         break;
//     case Score >= 50 && Score < 60:                      wrong approach.
//         console.log("Your Grade is A")
//         break;
//     case Score >= 40 && Score < 50:
//         console.log("Your Grade is A")
//         break;
//     case Score >= 33 && Score < 40:
//         console.log("Your Grade is A")
//         break;
//     case Score < 33 && Score >= 0:
//         console.log("You failed in your exam.");
//         break;
//     default:
//         console.log(`${Score} is not a valid input `);
//         break;
// }

let Score = 80

if (Score >= 80 && Score <= 100) {
    console.log(" Your grade is A");
}
else if (Score >= 70 && Score < 80) {
    console.log(" Your grade is B ");
}
else if (Score >= 60 && Score < 70) {
    console.log(" Your grade is C");
}
else if (Score >= 50 && Score < 60) {
    console.log(" Your grade is D");
}
else if (Score >= 40 && Score < 50) {
    console.log(" Your grade is E ");
}
else if (Score >= 33 && Score < 40) {
    console.log(" Your grade is F");
}
else if (Score >= 0 && Score < 33) {
    console.log(" You failed in your exam.");
}
else {
    console.log("Enter a valid input.");
}

// task 6 

let num1 = 33
res = num1 % 2 == 0 ? console.log(`${num1} is a even number .`)
    : console.log(`${num1} is a odd number .`);

//task 7

function isLeap(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true
    }
    else {
        return false
    }

}

let year = 2004

if (isLeap(year)) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}



// Took a hour to complete the challenge .