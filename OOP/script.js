//normal function
const circle = {
    radius: 1,
    location:{
        x: 1,
        y: 1,
        draw: function(){
            console.log("draw")
        }
    }

}

// circle.location.draw()

// factory/constructor function

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}

const circle1 = createCircle(1)
// circle1.draw();


//Constructor Function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

const firstCircle = new Circle(1)   //new keyword creates an empty array and points it to the sets 'this' to point to that object, if new keyword is not used it points to the global window
