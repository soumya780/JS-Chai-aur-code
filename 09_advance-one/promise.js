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
    setTimeout(function () {
        let error = true;
        if (!error) {
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

promisFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch(function (error) {
    console.log(error);
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: 'Swastik',
                phone: 79781121454
            })
        }
        else {
            reject('ERROR (promiseFive): couldnt proceed further')
        }
    }, 3000)


})

promiseFive
    .then(function (user) {
        console.log(user);
        return user.phone;

    })
    .then(function (userName) {
        console.log(userName);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected. ")
    )

const promiseSix = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({
                userCity: 'BAM',
                PIN: 760003
            })
        }
        else {
            reject('ERROR : Canot access the address.')
        }
    }, 4000)
})

async function consumepromiseSix() {
    // const response = await promiseSix
    // console.log(response);
    // in this way it wont catch the errror in asyn await 
    // so we have to use try catch to be free from the errors.
    try {
        const response = await promiseSix
        console.log(response);
        console.log(response.userCity);
        console.log(response.PIN);

    } catch (error) {
        console.log(error);

    }



}
consumepromiseSix()


// async function getAllUsers () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log('ERROR : ' , error);

//     }

// }
// getAllUsers()

// Upper one is a async , await program


// lets make it using then()

fetch('https://jsonplaceholder.typicode.com/users').
    then((response) => {
        return response.json()
    }).
    then((data) => {
        console.log(data[9].address.street); 
    }).
    catch((error) => {
        console.log(error);
        
    })
