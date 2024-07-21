let user ={
    username :"soumya",
    price : 20033,
    welcomeMessage : function () {
        // console.log(`Hello! ${this.username} welcome to your page `);
        // console.log(this);
    }
}
user.welcomeMessage()

console.log(this);
// {} Output


// function ARROW (){
//     const userName = "Soumy780"
//     console.log(this.userName);
// }
// ARROW()

// let funct = function(){
//     const userName = "sonu3245"
//     console.log(this.userName);
// }
// funct()



//This is called arrow function
const arrow = (num1,num2)=>{
    return num1=num2  // This is explicitly return
}
console.log(arrow(4,5));


// there is another way to write ,

// implicitly return , Here we do use the return key wordxx
// const mul = (in1 , in2) => in1*in2 ; 
//  console.log("mul")
// mul(5,5)

// There is another way to implicitely return 
const mul = (in1 , in2) => ( in1*in2 ) 

// let x =10
// const sam = function(x , y) {
//     console.log(x);
//     var x = 20 ;
//     console.log(y);
// }
// sam(x,77)


