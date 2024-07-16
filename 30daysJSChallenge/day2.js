//* Arithmetic Operation  */
//Task 1

let num1 = 22
let num2 = 23
console.log(num1 + num2);


// Task 2 

console.log(num1 - num2);

// Task 3 

console.log(num1 * num2);

// Task 4 

console.log(num1 / num2);

// Task 5
console.log(num1 % num2);

//Activity 2
//task 6

// += 
let sum = num1 += 5
console.log(sum);
//-=
let sub = num2 -= 5
console.log(sum);

let word = " Hello"
console.log(word += " bengaluru");

//Activity 3 
//task 8
console.log(num1 > num2)
console.log(num1 < num2)

//task 9
console.log(num1 >= num2)
console.log(num1 <= num2)

//task 10

console.log(num1 == num2)

//task 11

// let num1 = 22
// let num2 = 23
if (num1 == 10 && num2 == 22) {
    console.log(num1 === num2)
    console.log("mathched");

}
else {
    console.log("not - matched");
}

//task 12

if (num1 == 22 || num2 == 23) {
    console.log( "mathched");

}
else {
    console.log("not - matched");
}

//Task 13

//!
console.log(num1 != num2)

// Activity 5
//Task 14

let name = "soumya "
const age = 22

let drinks = age >= 18 ? "beer" : "Colddrinks";

console.log(`Hello! ${name} Enjoy your ${drinks}`)


let dlAge = 34
let compatibility = dlAge >= 18 ? "You can drive "
    : dlAge <= 0 ? " Enter a Valid age " : "you cant apply for licence";

console.log(compatibility);

// let Sage = 23

// const res = Sage >= 18 ? "Eligible" 
//                 : Sage <= 10 ? "You are kid" : "Go to home kido"
// console.log(res);

// Feature 
//1 Arithmetic Operation Script

let inputOne = 22
let inputTwo = 33

console.table(["num 1 = " + inputOne, "num 2 = " + inputTwo])
let operator = "-"
// let op = operator.split(",")
// let condition = true; 
// // let selectedOperator = condition ? op[0] : op[1];
switch (operator) {
    case '+':
        console.log(inputOne + inputTwo)
        break;
    case '-':
        console.log(inputOne - inputTwo)
        break;
    case '*':
        console.log(inputOne * inputTwo)
        break;
    case '/':
        console.log(inputOne / inputTwo)
        break;


    default:
        break;
}
// feature 2
let numb1 = 12
let numb2 = 15

let comparision = ">,<,<=,>=,==,==="
let comp= comparision.split(",")

for (let i =0 ; i<comp.length ;i++)
{
    selectOP = comp[i]
    switch(selectOP){
        case '>':
            console.log(">"+numb1>numb2);
            break;
        case '<':
            console.log("<"+numb1<numb2);
            break;
        case '<=':
            
            console.log(numb1<=numb2);
            break;
        case '>=':
            console.log(">="+numb1>=numb2);
            break;
        case '==':
            console.log("== " +numb1==numb2);
            break;
        case '===':
            console.log("==="+numb1===numb2);
            break;
        default:
            break;

         
    }
}




// feature  3
let input = 10;
let res = input >= 0 ? "Positive " : "negative";
console.log(res);