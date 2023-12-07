// filter() creates an empty array and that array gets filled by the elements which pass the condition defined in the filter method

const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = arr.filter((i)=> i>5);  //use return keyword to return the result of the operation if curly braces are used

console.log(filteredNumbers);

//We can also filter this array using forEach loop
const tempStore = [];
arr.forEach((i)=>{
    if(i>5){
        tempStore.push(i);
    }
})

console.log(tempStore);