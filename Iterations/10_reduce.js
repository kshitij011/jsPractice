//reduce() reduces the array to single value by performing defined function on it. The returned value is stored in accumulator which accumulates the value progress

const arr =[1, 2, 3]

const myTotal = arr.reduce((a,i)=> a+i,0)   //here 0 is the initial value of accumulator (a in this case)

console.log(myTotal);

//shoping cart example

const shoppingCart = [
    {
    itemName: 'javaScript',
    price: 999,
    },
    {
    itemName: 'Python',
    price: 599,
    },
    {
    itemName: 'java',
    price: 799,
    }
]

let total = shoppingCart.reduce((a, i)=> a+ i.price, 0);
console.log(total);