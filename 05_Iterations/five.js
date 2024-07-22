const coding = ["js","cpp","java","css"]
// coding.forEach(function(val){
//     console.log(val);
// }) its a way to use for each

// coding.forEach( (item) => {
//     console.log(item);
// } )

// or else we can first create a function and use that

function printMe (item){ 
    // console.log(item);
}

coding.forEach(printMe)

// coding.forEach( (item , index ,arr )=>{
//     console.log(item , index, arr);
// } )

// Another way for for each


const code = [
    {
        languageName : "java",
        fileName : ".java"
    },
    {
        languageName : "javascript",
        fileName : ".js"
    },
    {
        languageName : "react",
        fileName : ".jsx"
    }
]

code.forEach( (item) => {
    console.log(`Language is ${item.languageName} & its format is ${item.fileName}`);
} )