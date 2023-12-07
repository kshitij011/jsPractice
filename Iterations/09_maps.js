//Looping using maps

const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map((i) => i +10);
console.log(newArr);

// map chaining

const newNums = arr     //.map((i)=> i*10).map((i)=> i+1).filter((i)=> i>50)  //single line
                .map((i)=> i*10)
                .map((i)=> i+1)
                .filter((i)=> i>50)
console.log(newNums);