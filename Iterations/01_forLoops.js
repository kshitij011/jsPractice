//Printing numbers from 1 to 10

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

//Printing tables
// for(let i = 1; i<=10; i++){
//     console.log("Table of ", i);
//     for(let j = 1; j<=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

const arr = ["e1", "e2", "e3"];

for(let i=0; i < arr.length; i++){  //length of array starts from natural numbers i.e from 1.
    const temp = arr[i];
    console.log(temp);
}

for(let i = 1; i <= 10; i++){
    if(i===3){
        continue;  //Skips the iteration
    }
    if(i===5){
        console.log(`Detected ${i}`);
        break;  //Breaks the control flow and out of the loop
    }
    console.log(i);
}