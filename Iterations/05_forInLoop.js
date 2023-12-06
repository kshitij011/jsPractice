//These loops are mostly used to iterate over an object

const myObj = {
    js: 'jaavscript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const i in myObj){
    console.log( myObj[i]);
}

arr = ['e1', 'e2', 'e3']

for(const i in arr){
    console.log(i, arr[i]);     //i only prints the keys of the array i.e 0, 1, 2 and not its values
}