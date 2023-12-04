// arrays
const myArr = [0,1,2,3,4,5];
const myHeros = ["Batman", "Thor", "Superman"];
const myArr2 =new Array(9,8,7,6);
console.log(myArr[1]);

//Array methods
// console.log(`Original myArr: ${myArr}`)
console.log("Original myArr: ", myArr);

//Push pop adds/removes elements from the end of an array.
myArr.push(6);
console.log(myArr);

myArr.pop()
console.log(myArr);

// unshift shift adds/removes elements from the beginning of an array.
myArr.unshift("start")
console.log(myArr);

myArr.shift()
console.log(myArr);

//Checking if the value exists and its index
console.log(myArr.includes(9)); //returns true or false
console.log(myArr.indexOf(9)); //returns the index of the element, returns -1 if element is not present.

//slice and splice
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("A ",myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("B ",myArr);