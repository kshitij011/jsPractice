const colors = document.querySelectorAll('.box');
const body = document.querySelector('body');

colors.forEach((color)=>{
    console.log(color)
    color.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
        // if(e.target.classList.contains('grey')){
        //     body.style.backgroundColor = "grey"
        // }
        switch(true){
            case e.target.classList.contains('blue'):
            body.style.backgroundColor = "blue";
            break;
            case e.target.classList.contains('grey'):
            body.style.backgroundColor = "grey";
            break;
            case e.target.classList.contains('yellow'):
            body.style.backgroundColor = "yellow";
            break;
            case e.target.classList.contains('red'):
            body.style.backgroundColor = "red";
            break;
            case e.target.classList.contains('orange'):
            body.style.backgroundColor = "orange";
            break;
        }
    })
});
// colors.
// console.log()
