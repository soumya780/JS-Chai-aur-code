// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// buttons.forEach(function (button) {
//     console.log(button)
//     button.addEventListener('click', function (e) {
//         // console.log(e);
//         // console.log(e.target);
//         const color = e.target.id;
//         switch (color) {
//             case "grey":

//                 body.style.backgroundColor = color
//                 button.style.borderColor = "white"
//                 break;

//             case "white":

//                 body.style.backgroundColor = color
//                 button.style.borderColor = "blue"
//                 break;

//             case "blue":
//                 body.style.backgroundColor = "blue"
//                 button.style.borderColor = "yellow"
//                 // body.style.color = "white"
//                 break;
//             case "yellow":

//                 body.style.backgroundColor = "yellow"
//                 button.style.borderColor = "purple"
//                 break;
//             case "purple":

//                 body.style.backgroundColor = "purple"
//                 button.style.borderColor = "#212121"
//                 break;
//             case "black":

//                 body.style.backgroundColor = color
//                 button.style.borderColor = "grey"
//                 break;

//             default:
//                 body.style.backgroundColor = "white"
//                 button.style.borderColor = color

//                 break;
//         }

//         if (body.style.backgroundColor === "blue" || body.style.backgroundColor === "black" || body.style.backgroundColor === "grey" || body.style.backgroundColor === "purple") {
//             body.style.color = "white" 
//         } else {
//             body.style.color = "black"
//         }
//         // if (e.target.id == "grey") {
//         //     body.style.backgroundColor = "grey"
//         //     // body.style.backgroundColor = e.target.id
//         //     //  we can use this also
//         // }
//     })
// })


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (bt) {
  bt.addEventListener('click', function (event) {
    let color = event.target.id;
    if (
      color === 'grey' ||
      color === 'white' ||
      color === 'blue' ||
      color === 'yellow'
    ) {
      body.style.backgroundColor = color;
    } else {
      body.style.backgroundColor = white;
    }
  });
});