// let name =""
// function callMyName (name){
//     console.log(`Hello! ${name}`);
// }
// callMyName("Soumya")

function sum(num1, num2) {
    let res = num1 = num2
    console.log("hello! Soumya "); // This one will be printed.
    return res
    // console.log("hello"); 
    // This statement cant be printed because its written after return statement.
}
console.log(sum(12, 12))

// SUing default values to stay away from Undefined error

function logIn(username = "Soumya") {
    console.log(`${username} just logged in.`);
}
// logIn() // now if someone passes nothing it will print the default value
// Soumya
logIn("Sanjana") // Now that user given the argument the username will be overwrite.



// How to pass multiple parameters at a time 

function calculateCart(...price) {
    return price
}
console.log(calculateCart(12, 4, 673, 23, 5567, 112));
// in this way we store lot of number in a array

function car(person1, person2, ...passenger) {
    return passenger
}
console.log(car("soumya", "sanjana", "babita", "sohan", "maheswar"));
// here (person1 , person2, ...passenger)

// How to pass object in function 

let user = {
    username: "Sanjana",
    roll: 266
}

function handleObject(anyObj) {
    console.log(`Hello ${anyObj.username} your roll number is ${anyObj.roll}`)
}
// handleObject({
//     username:"soumya" ,\
//     roll: 229
// })
// In this way we can pass a new object in function 

handleObject(user)
// In this way we can call the which is present.


// How to use array in Function
let myArr = [892,4,5,22,32343,5465,6,786,]

function newArray (getArr){
    console.log(getArr[0]);

}
// newArray(myArr) it call the myArray

newArray([12,355,2435,65734,35,45,4,545,6]) 
 
// This way we can give a new array in the arguments
