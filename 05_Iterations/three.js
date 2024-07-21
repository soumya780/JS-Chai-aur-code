// The for of loop
const arr = [12, 3, 45, 5, 5]

for (const i of arr) {
    //  i      of  ( the thing which u want to iterate)
    // console.log(i);
}
// console.log("");
const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet);
}


// Maps

const map = new Map()

map.set('IN', "INDIA")
//  ('Key ', "value")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('USA', "UNITED STATES OF AMERICA") // It wont be printed
// The Map dosenot set same value multiple times 
map.set('UK', "UNITED KINGDOM")

// console.log(map);

for (const key of map) {
    // console.log(key);
}
// output will be : 
// [ 'IN', 'INDIA' ]

// [ 'USA', 'UNITED STATES OF AMERICA' ]
// [ 'UK', 'UNITED KINGDOM' ]

// To acess every key and value in map we use another technique

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

//Outpt :
// IN :- INDIA
// USA :- UNITED STATES OF AMERICA
// UK :- UNITED KINGDOM


// Lets Try for of on Object

const myObj = {
    'game1': "Call Of Duty",
    'game2': "Vice City"
}
// for (const [key , value ] of myObj) {
//     console.log(key , ":-" , value );
// }
// We cant iterate the Object using forOf loop