// // primitive datatypes
// // (CAll BY Value)
// // 7 catagories
// // 1. String
// // 2. number
// // 3. boolean
// // 4. null
// // 5.undefined
// // 6.Symbol
// // 7.BigInt


// const score = 100
// const scoreVal = 10.33
// const isLoggedIn = false
// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(typeof (anotherId));
// console.table([id, anotherId])
// console.log(id == anotherId);

// const bigNumber = 324354657684232325n
// console.log(typeof bigNumber);

// // REference type / non-primitive
// //Arrays
// //Objects
// //FUNCTION

// // the type of non primitive data is function but it show 

// const heros = ["shaktiman ", "nagaraj", "doga"]

// console.log("Array type", typeof(heros));

// let myObj = {
//     // The code between the {} is known as Object
//     Myname: "soumya ",
//     //  Key  : KeyValue 
//     // In object we store key value pair so we use "Key : keyvalue"
//     Myage: 22
// }



// // function(){} 
// // This is the syntax of function 

// const myFunction = function(){
//     console.log("hello World");
// }
// console.log(typeof(myFunction));
// console.log(typeof(myObj));


// Java SCript is a dynamically typed language
// because it checks the type of datatype during the requestAnimationFrame.





// #######################################################################
// There are two type of memories in Java script
// 1. Stack Memory (primitive ) , 2. Heap Memory (nonprimitive)

let myPhone = "Iphone"

let anotherPhone = myPhone

anotherPhone = "Samsung"

console.log(anotherPhone);
console.log(myPhone);

let user ={
    email: "soumya@gmail.com" ,
    UPI : "7978112"  
}

let userOne = user

userOne.email = "Sonu@323"
console.log(userOne.email)
console.log(user.email)
