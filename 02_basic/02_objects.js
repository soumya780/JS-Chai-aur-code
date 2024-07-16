const tinderUser = {}

tinderUser.id = "229_sam"
tinderUser.name = "Samkaran"
tinderUser.loggedIn = true

// console.log(tinderUser);
// console.log(tinderUser["id"]);

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

// const combineObj = Object.assign({},obj1,obj2,obj3)
// console.log(combineObj);

// Else We can Use the Spread Operation 

const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4);