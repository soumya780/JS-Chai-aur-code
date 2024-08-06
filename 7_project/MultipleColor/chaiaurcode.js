const randomColor = function () {
    const hex = '0123456789ABCDEF'
    // it is the range of hex code

    let  color = '#'
    // it will start from "#122FBB"
    for (let i = 0; i < 6; i++)
    // i<6 because hex code is of 6 digits
    {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;

}
let setInterId 
// randomColor()
const startChangingcolor = function () {
    const changeBgColor = function () {
        document.body.style.backgroundColor = randomColor()
        document.body.style.color=randomColor()
    }
    setInterId = setInterval(changeBgColor, 1000)
}
const stopChangingColor = function () {
    clearInterval(setInterId)
    setInterId = null;
}

document.querySelector('#start').addEventListener('click', startChangingcolor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)


// Lets genarate the random Number for hex

// Math.random() * 16
// this way random number will be generated
// between 0 - 16
// Math.floor(Math.random() * 16) 
