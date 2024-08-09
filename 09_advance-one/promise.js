const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async Task completed.");
        resolve()
    }, 6000)

})
promiseOne.then(function () {
    console.log("promise is consumed.");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise 2 consumed .");
        resolve()

    }, 11000)
}).then(function () {
    console.log("Async 2 resolved");
})
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Chai",
            email: "soumyapanda780@gmail.com",
        })
    }, 9000)
}); // Closing parenthesis added here

promiseThree.then(function (user) {
    console.log(user);

})


// error catching in promise

const promisFour = new Promise(function (resolve, reject) {
    setTimeout(function () 
    {
        let error = true;
        if (!error)
        {
            resolve({
                username: "Soumya Ranjan Panda",
                password: "srp@230"
            })
        }
        else {
            reject('ERROR : Something went wrong.')
        }
    }, 2000);
})

promisFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})