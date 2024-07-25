const tinderUser = {}

tinderUser.id = "229_sam"
tinderUser.name = "Samkaran"
tinderUser.loggedIn = true

console.log(tinderUser)
console.log(tinderUser["id"])

const newUser = {
    email: "some@gmail",
    ph: "2311",
    userFullName: 
    {
        FullName: 
        {
            firstName: "Sohan",
            lastName: "Panda"
        }
    }
}
console.log(newUser.userFullName.FullName.firstName);

// How to combine 3 objects. 

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 ={5:"e",6:"f"}

console.log("_-_---__-_-_--");
const combineObj = Object.assign({},obj1,obj2,obj3)
console.log(combineObj);

// Else We can Use the Spread Operation 
console.log("--- spread operation ------");
const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4);



//object destructuring

const course= {
    courseName : "MERN stack dev",
    coursePrice : 2999.00,
    courseInstructor : "komol"

}

course.courseInstructor

// const {courseInstructor } = course
// In this way we can deconstruct the object
// Soo next time while accesing the value we can just write
// console.log(courseInstructor);


// Else we can also give courseInstructor a small name to access
const {courseInstructor : Teacher} =course
console.log(Teacher);



 // In API format the datacomes in this format :
//  {
//     "name" : "soumya",
//     "course" : "sigma developer",
//     "fees" : 1000
//  }

// OR ELSE The data of api come in array format 

// [
//     {
        
//     },
//     {

//     }
// ]

// 