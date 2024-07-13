const score = 6969
console.log(score);
const balance = new Number(223)
console.log(balance);
// console.log(typeof(score));
// console.log(typeof(balance));
console.log(balance.toFixed(2));

const otherNumber = 1123.8778
//.toPrecision(5) precises the number till 5 th place 
// 1122.689
// 1234 567 .toPrecision(5) => 1122.7
console.log(otherNumber.toPrecision(5));

// const hundreds = 100000000
// console.log(hundreds.toLocaleString());
// // Output : 100,000,000
// // This provides the USA standards 

//To use the Indian Standards 
// console.log(Rupee.toLocaleString('en-IN'));
// ('en-In') it provides the Indian Standard
const Rupee = 10000000
console.log(Rupee.toLocaleString('en-IN'));
//output: 1,00,00,000

//************* Math ********** */

console.log(Math);
console.log(Math.abs(-5));
console.log(Matha.round(-5.998));
console.log(Matha.round(-5.998));

console.log(Math.random());
console.log(Math.random()*10+1); 
// if you multiply 10 with something the digits will shift to right
// 0.98 => 9.8
// with the help of +1 , if the digit is 
// 0.03 => 0.3 to avoid this we use +1 it will provide 1.3






