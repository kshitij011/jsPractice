const dcHeros = ['Superman', 'Flash', 'Batman'];
const marvelHeros = new Array('Thor', 'Ironman', 'Spiderman');

console.log(dcHeros);
console.log(marvelHeros);

//***push method the add one array to other***
// marvelHeros.push(dcHeros);  pushes array in another array
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

//***concat method to add values of one array to other by passing the values in third constant.***
// const allHeros = marvelHeros.concat(dcHeros);   //Pushes the values of first array to the second array to form single array
// console.log(allHeros);


//***Spread Operator can combine values of multiple arrays and store it in new const or variable.***
const arr3 = ['lemon', 'grass', 'pineapple'];
const multiArr = [...marvelHeros, ...dcHeros, ...arr3];
console.log(multiArr);

//flat function
const multiDimensionalArr = [1, 2, 3, [2, 4, 5], 4, 5, [3, 4, [4, 6, 5], 5], 6]
console.log(multiDimensionalArr.flat(1));
console.log(multiDimensionalArr.flat(2)); //.flat(Infinite) infinite depth

//convert string to array
console.log(Array.isArray("Computer"));
console.log(Array.from("Computer Geek"));    //Converts input to array by saparating each character
console.log(Array.from({name: "Computer"}));

console.log(Array.of(marvelHeros, dcHeros, arr3));  //returns an array of listed elements individually
