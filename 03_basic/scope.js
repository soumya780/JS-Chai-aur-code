let a =6553
var b = 66
if (true) 
{    
    let a = 55
    var c = 798
    let d = 666
    console.log("block code",a);
}
// console.log(a);
// console.log(c);

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    // it cant be printed because it is out of its scope

}

// console.log(username);
// It's out of its scope so it cant print

console.log( addOne(2))
 function addOne(num){
    return num + 1
 }
console.log( addOne(2))

 const addTwo = function(num1){
    // Expression (mbut also known as function.)
    return num1+2
 }
 console.log(addTwo(9))