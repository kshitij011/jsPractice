function calculateCartPrice(...num1){   //(val1, val2, ...num1): first two values will be stored in first two parameters and rest in ...num1.
    return num1;
};

console.log(calculateCartPrice(200, 400 ,500, 2000));

//passing object in the function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

const handle = {
    name: "Comp",
    price: 333
};

handleObject(handle);