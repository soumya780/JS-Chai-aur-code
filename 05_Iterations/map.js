const myNum = [1, 2, 3, 4, 5, 6, 7, 8]

// what if we use scopes in callback function
// const addedNum = myNum.map((num) => {num + 10})
// [
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined
// ]

// To resolve this issue we use return in scopes "{}"
// const addedNum = myNum.map((num) => { return num + 10})


// const addedNum = myNum.map((num) => num + 10)

//Lets use multiple maps in this

const newNum = myNum.map( (num) => num*10 )
                    .map( (num) => num+1 )
                    .filter( (num) => num>=40 )
console.log(newNum);

