const coding = ['java', 'python', 'cpp', 'javascript']

//  forEach loop calls a callback function once for every array element

coding.forEach((i)=>{
    console.log(i)
})

//other way
console.log("other way \n");
const getVal = (item) =>{
    console.log(item)
}

coding.forEach(getVal);

//forEach loop also accesses other elements like (item, value, arr)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
});

//objects inside array and accessing it:

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: 'js'
    },
    {
        languageName: "Python",
        languageFileName: 'py'
    },
    {
        languageName: "Java",
        languageFileName: 'java'
    }
]

myCoding.forEach((i)=>{
    console.log(i.languageName);
})