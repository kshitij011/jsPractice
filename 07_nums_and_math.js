const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.length);
console.log(balance.toString().length);
console.log(balance.toFixed(1));
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(3))

const hundreds =1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Math functions

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(7.7));
console.log(Math.ceil(7.7));
console.log(Math.floor(7.7));
console.log(Math.min(5, 6, 2, 9, 1));
console.log(Math.max(5, 6, 2, 9, 1));

console.log(Math.random());
console.log(Math.random()* 10); //To bring the number in the tens place
console.log(Math.random()* 10 + 1)  //To avoid getting 0 as random number
console.log(Math.round(Math.random()* 10))

const min = 100;
const max =200;

console.log(Math.floor(Math.random()*(max- min +1))+min)
