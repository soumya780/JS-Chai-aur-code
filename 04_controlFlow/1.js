let score = 200
// if (score>50) console.log("Passed") , console.log("second output"); 
// We can write the code in this way but its not readable in proffessional way

const userLoggedIn = true
const card = true
const userLoggedinEmail = true
if (userLoggedIn && card){
    console.log("You can purchase things.")
}
if (userLoggedIn || userLoggedinEmail){
    console.log("user can buy.");
        
}