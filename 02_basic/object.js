// Object.create  
// It a ct=onstructer method 

mySymb = Symbol("key1")

const jsUser = {
    name: "soumya ",
    [mySymb] : "Key1",
    "full name" : "Soumya Ranjan Panda",
    // We cant access this directly using .full name 
    // Wr have to use a keyword jsUser["full name"]
    email: "spb320@nist.edu",
    ph: 797811,
    isLoggedIn: false,
    lastLoggedIn : ["Mon","tue"]
}
console.log(jsUser[mySymb]);
console.log(jsUser["full name"]);

jsUser.email = "soumyapanda780@gmail.com"

// Object.freeze(jsUser)

// By using Object.freeze(obj_name) it will freeze 

// jsUser.isLoggedIn = true

// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JsUser.");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JsUser , ${this["full name"]}`);
}

jsUser.greeting()
jsUser.greetingTwo()


// All these are Example of Object Litterals
