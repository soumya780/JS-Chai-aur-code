//for loop 

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log(`${element} the best number .`);
    }
    // console.log(element);
}

for (let i = 0; i < 10 ; i++) {
    // console.log(`Outerloop value : ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop is : ${j} & inner loop is : ${i}`);
    }   
}

// Multiplication Tbl 

//1 * 2 = 2 
//i * j = i*j

for (let i = 1; i < 12 ; i++) {
    // console.log(`Multiplication Table for  ${i}`);
    for (let j = 1; j < 11; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }   
}

for (let i = 1; i < 12 ; ++i) {
    // console.log(`Multiplication Table for  ${i}`);
    for (let j = 1; j < 11; ++j) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }   
}

// The break state ment in Loop
for (let index = 0; index < 11; index++) {
    if (index == 5){
        console.log(`favourite number captured`);
        break
    }
    console.log(index);

    
}


// Continue in loop

for (let i = 0; i < 10; i++) {
    if (i == 5){
        console.log(`we detected ${i} but for now you can skip ${i}and continue the loop`)
        continue
    }
    console.log(`number : ${i}`);

    
}