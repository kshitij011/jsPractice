// Primitive datatype uses stack memory where the data is called by value i.e the value of one variable is copied to another variable, any changes made in second variable will not be reflected in first variable's value
console.log("Primitive data types")
let a = 3
let b = a

console.log("Before changing a's value")
console.log("Value of 'a': ", a)
console.log("Value of 'b': ", b)

a=5

console.log("After changing a's value")

console.log("Value of 'a': ", a)
console.log("Value of 'b': ", b)

console.log("Non-Primitive data types")

let object1 = {
    name: "xyz",
    roll: 43
}

console.log("Before changing object2's value")

let object2 = object1

console.log("Value of 'object1': ", object1)
console.log("Value of 'object2': ", object2)

object2.name = "abc"

console.log("Before changing object2's value")

console.log("Value of 'object1': ", object1)
console.log("Value of 'object2': ", object2)

