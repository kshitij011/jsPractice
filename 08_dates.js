let myDate = new Date();
console.log(myDate);
console.log("To String ", myDate.toString())
console.log("ISO String ", myDate.toISOString())
console.log("To JSON ", myDate.toJSON())
console.log("Date String ",myDate.toDateString())
console.log("Local String ", myDate.toLocaleString())
console.log("Local time string ", myDate.toLocaleTimeString())
// console.log(myDate.to())

let myCreatedDate = new Date(2023, 0, 23, 5, 3) //Declaring a date
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()    //The milliseconds are counted from 1st Jan 1970
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//To convert these milliseconds into seconds divide it by 1000
console.log(Date.now()/1000);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);