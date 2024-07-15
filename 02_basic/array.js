let array = [98,44,"soumya"]
// console.log(array[0]);

// const name = new Array(1,2,4,"soumya");
// console.log(name);

// Array methods 

array.push(22,33,"sonu")
console.log(array);
// array.pop("sonu");
console.log("*********************8888");
array.unshift(9);
console.log("** Unshift");
console.log(array);
array.shift()
console.log(array.includes(9));
console.log(array.indexOf("soumya"));

// There is two methods know as slice and splice 

let meraAraay = [12,4,5,6,6,7]
let myNewArray = meraAraay.slice(0,4)
// in .slice(start,end ) => it slices the part from start and excluding the end 
// It doesnt change the main array .

console.log(myNewArray);
console.log(meraAraay);

console.log("*******************************");
console.log("the original array is :", meraAraay);
let myNewArray2 = meraAraay.splice(0,3)

console.log(myNewArray2);
console.log(meraAraay);

/// In Splice(1,3) it start from index 1 and also includes the 3 index and its splices the parts from main array.
  