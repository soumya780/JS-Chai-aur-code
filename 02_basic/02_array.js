let Heros = ["Spiderman ", " Superman" , "Shaktiman","Hanuman","Kriss"]
let marvelHeros = ["IronMan","Thor","Hulk"]
// console.log(Heros);
// Heros.push(marvelHeros)

console.table (marvelHeros.concat(Heros))

// Another way to do this is 

const allHeros = [...Heros , ...marvelHeros]
console.log(allHeros);
 
let score1 =22
let score2 =522
let score3 =6422
let score4 =64422
let sub = "Math"

console.log(Array.of(score1,score2,score3,score4,sub));

