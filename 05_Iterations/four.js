const myObject = {
    js: "JavaScript",
    cpp: "C++",
    jsx: "React"

}

// to acess the object through loop we use 

for (const key in myObject) {
    //    console.log(`${key} fullform is ${myObject[key]}`);
}

let arr = [1, 34, 56, 32, 2, 3]

for (const key in arr) {
    //   console.log(key); // it will print the index of the arrays 
    // output : 0 1 2 3 4 5

    // To print the element of the array :

    // console.log(`the ${key} element is : ${arr[key]} `);
}


// npw lets try for the map 

const map = new Map()
map.set('Game1', "Nfs")
map.set('Game2', "GTAV")
map.set('Game3', "COD")

// for (const k in map) {
//     console.log(k);
// }
// We cant iterate the map.