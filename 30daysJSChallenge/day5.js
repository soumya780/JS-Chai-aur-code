//Activity 1
// Task 1

function isEven (num) {
     num%2 ==0 ?  console.log(`${num} is an even number.`) : console.log(`${num} is an odd number.`)
}
isEven(12)

// Task2
// number = 2
function square_res (number){
    let res = Math.pow(number,2)
            //Math.pow(number , power) ex : (2,2) => 2 to the power 2 = 4
            // answer will be 2.
    console.log(`The Square of ${number} is : ${res}`);
}
square_res(3)

// Task 3
function bigNum (num1 ,num2){
    if(num1>num2)
    {
        console.log(`${num1} is the large number.`);
    }
    else{
        console.log(`${num2} is the large number.`);
    }
}
bigNum(12,44)

// Task 4
function addStr(str1,str2) {
    console.log(str1.concat(" ",str2));
}
addStr("Soumya","Sanjana")

//Task 5





// Activity 4
// Task 7
let input2 = 33
function prod (input ,input2){
    product = input*input2
    console.log(`The product of ${input} and ${input2} is : ${product}`);
}
prod(2,input2 )

//task 8

let age = 22
function greet (name , age ){
    console.log(`Hello! ${name} , Your age is ${age}`)
}
greet ("Kamal",age)

//Task 9
