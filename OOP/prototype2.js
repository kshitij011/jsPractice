let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.superman}`);
    }
}


Object.prototype.comp = function(){
    console.log("Comp is inside all objects");
}

Array.prototype.injectArrayPrototype = function(){
    console.log(`Function inside array prototype`);
}

heroPower.comp()

myHeros.comp()

myHeros.injectArrayPrototype()

// heroPower.injectArrayPrototype()

// inheritance

const User = {
    name: "comp",
    email: "comp@gmail.com"
}

const Teacher = {
    makeVedio: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JA assignment',
    fullTime: true,
    __proto__: TeachingSupport  //prototypal inheritance
}

//modal syntax new method instead of __proto__

Object.setPrototypeOf(TeachingSupport, Teacher)     //first argument accesses the properties of second argument

let anotherUsername = "Computer   "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"ComputerEngg   ".trueLength()
"iceTea".trueLength()