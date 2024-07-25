// Task 1
let arr = ["soumya", "kamal ", "maxi", "bibek"]
console.log(arr);

// Task 2
console.log(arr[0], arr[1])

//Activity 2
//task 3
arr.push("ronit")
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift("Ronit")
console.log(arr);
arr.shift("Ronit")
console.log(arr);

//Activity 3
// Array methods 

let array1 = [1, 2, 35, 5, 6, 7, 6]
console.log("-----Map------");
const square = array1.map((val) => val * val)
// console.log(square);
// -----Map------
// [
//    1,  4, 1225,
//   25, 36,   49,
//   36
// ]

const Rockstar = [
   {
      GameName: "GTA V",
      publish: 2015,
      console: "PS4"
   },
   {
      GameName: "GTA IV",
      publish: 2013,
      console: "PS4"
   },
   {
      GameName: "GTA III",
      publish: 2005,
      console: "PS3"
   },
   {
      GameName: "GTA VI",
      publish: 2025,
      console: "PS5"
   },
]

const Game= Rockstar.filter( (val) => val.console == "PS4" && val.publish >=2010 )

// console.log(Game);
// Output:
// [
//     { GameName: 'GTA V', publish: 2015, console: 'PS4' },
//     { GameName: 'GTA IV', publish: 2013, console: 'PS4' }
// ]


//Task 9
// reduce method

const exmp = [1,2,3,4,5,6]
const add =  exmp.reduce((acc , num) =>{ 
   console.log(`The acc(${acc}) + num(${num}) : ${acc+num}`) 
   return acc+num },0)
console.log(add);






//Activity 4
//Task 10
let array = ["soumya", "sohan"]
for (let i = 0; i < array.length; i++) {
   console.log(array[i])
}
