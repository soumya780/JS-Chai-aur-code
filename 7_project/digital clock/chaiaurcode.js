// const time = document.querySelector('#clock')

// const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toISOString)


// Now we will show the time when someone clicks the local time
// const button = document.querySelector('#banner')
// const clock = document.querySelector('#clock')

// const DateAndTime = new Date()
// const time = DateAndTime.toLocaleTimeString()

// button.addEventListener('click' , function (e){
//     clock.innerHTML = time
// })


// Lets make another event where the time will be printed 
// at the time of clicking the blanck clock place

const clock = document.querySelector('#clock')
const dateYear = document.querySelector('#date')

setInterval(function(){
    const DateAndTime = new Date()
//convert to time
const time = DateAndTime.toLocaleTimeString()
//convert to date
const tarikha = DateAndTime.toLocaleDateString()
clock.innerHTML = time
dateYear.innerHTML = tarikha
}, 1000)





// clock.addEventListener('click', function (e) {
//     clock.innerHTML = time
// })

// dateYear.addEventListener('click', function (e){
//     dateYear.innerHTML = tarikha
// })