// Activity 1 
// task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// task 2
console.log("5 eka panikia");
for (let i = 1; i <= 10; i++) {

    console.log(i * 5);
}
//Activity 2
// task 3

// While Loop 

let number = 1
let sum = 0;
while (number <= 5) {
    sum = sum + number
    number += 1
}

console.log(sum);

// task 4

let n = 10
while (n > 0) {
    console.log(n);
    n--
}

//Activity 3
//task 5


console.log("***********");
n = 1

do {
    console.log(n);
    n++
}
while (n <= 5)

//task 6

let num = 5;
let result = 1
let i = num
do {
    result *= i;
    i--;
}
while (i > 0)

console.log(`factorial of ${num} is : ${result}`);

const n1 = 20;

for(let i=n1; i>0 ;i--){
    let row = "";
    for(let j=1;j<=i;j++){
        row += "*"
        // console.log("*");

    }
    console.log(row);
}


// ***
// **
// *
