const userEmail = "abc@gmail.com" // oUTPUT : got the Email ID
// const userEmail = " " // oUTPUT :  got the Email ID

// const userEmail = "" // oUTPUT : Havent  got the Email ID    
if (userEmail) {
    console.log("got the Email ID");
}
else {
    console.log("Havent got the Email yet..");
}


// falsy Values : false , 0 , -0 , BigInt 0n ,"" , null , unndefined , NAN

// HOw to check if the array is empty or not  

// let arr = []

// if (arr.length === 0 ){
    //     console.log("array is empty");
    // }
    
    
    // HOw to check if the Object is empty or not  
// let myObj = {}

// if (Object.keys(myObj).length === 0){
//     console.log("Object is Empty");
// }


// NUllish Coalescing Operator (??) : null undefined

// let val1 = 10 ?? 22
// output : 10

// let val1 = null ?? 22
// output : 22

// let val1 = undefined ?? 22
// Output : 22

// let val1 = undefined ?? null 
//   Output : null ( It will use the 2nd value )

// let val1 =  null ?? undefined   
// output : udefined 

// console.log(val1);


// Ternary operator 

let userloggedIn = true 

userloggedIn ? console.log("Logged In ") : console.log("Not Logged IN")