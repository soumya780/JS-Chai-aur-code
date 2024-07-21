// IIFE stands for Immediately Invoked Function Expression

// function chai (){
//     console.log("Pillo chai")
// } 
// Its the normal way to write a function

// To call a IIFE we use :

(function chai (){
    console.log("Pagal Chaii Pilo!!");
})();

// also we can use arrow function for IIFE 

( (name) => {
    console.log(`Hello! ${name}`);
} )('Sohan') // to pass argument we use the last ()

// To run two IIFE we should give a paranthesis after (function (){})();