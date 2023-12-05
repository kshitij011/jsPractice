(function sample(){
    console.log('Hello');
})();   //Semicolon is necessary after the iife or else it produces error in later iife.

(function sample(){
    console.log('Hello...');
})();

console.log('hi');

((a, b) => {
    console.log(a+ b);;
})(2432, 8)