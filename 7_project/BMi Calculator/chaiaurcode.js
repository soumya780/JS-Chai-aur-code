const form = document.querySelector('form')


// const heigth = document.querySelector('#height')
// const weight = document.querySelector('#weight')

// we cant select the items of the form out side from it ,
// we have to call them inside the event write the value outside the event
//  it will run the script in first and will take zero as input but 
// here our priority is to take value when the user clicks the submit
// if 


form.addEventListener('submit', function (e) {
    e.preventDefault()
    // it will prevent from sending the data to server 
    // so that we can run the program in java script.

    // document.querySelector('#height')
    // This keyword used for selecting the id 
    // ? but to use the value in it we have to use 

    const heigth = parseInt(document.querySelector('#height').value)
    // this way the input will be converted to int
    const value = document.querySelector('#val')


    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    let bmi = (weight / ((heigth * heigth) / 10000)).toFixed(2);


    if (heigth == 0 || heigth < 0 || isNaN(heigth)) {
        result.innerHTML = `${heigth} is not a proper heigth , Please give a valid input `
    }
    else if (weight == 0 || weight < 0 || isNaN(weight)) {
        result.innerHTML = `${weight} is not a proper weight , Please give a valid input `
    }
    else {
        // show the result
        result.innerText = `BMI rate is:  ${bmi}`
        // console.log(bmi);

        
    }

    if (bmi < 18.6) {
        value.innerHTML = `You are Underweight because your weight is : ${weight}`
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
        value.innerHTML = `You are Normal because your weight is : ${weight}`
    }
    else if(bmi >= 24.9) {
        value.innerHTML = `Your weight is in over weight range because ur weight is : ${weight}`
    }
})
