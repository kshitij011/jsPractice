//map are like objects they hold key value pair
//a map remembers original insertion order of the keys
// but they do not store duplicate values

const map = new Map();

map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");
map.set('IN',"India"); //duplicate values are not stored

console.log(map);
console.log("\n Iterating through keys of the map: \n");
for(const key of map){

    console.log(key);

}

console.log("\n Iterating and accessing individual keys and values: \n");

for(const [i, j] of map){
    console.log(i, j);
}