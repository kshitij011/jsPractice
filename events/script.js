document.getElementById('sunSet').onclick = function(){
    alert("sunSet clicked");
}

//Better method that gives us more methods:

document.getElementById('sunSet').addEventListener('click', ()=> alert('sunSet clicked again'), false)//third parameter is set to false by default

//printing what's inside event
document.getElementById('sunSet').addEventListener('click', (e)=>{
    alert('sunSet clicked again')
    console.log(e);
} , false)//third parameter is set to false by default

//Things to learn:
// type, timeStamp, defaultPrevented
// target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//event propogation: If the file is tracked from inside to outside it is known as bubble propogation
document.getElementById('images').addEventListener('click',(e)=> console.log('Clicked insied the ul'))

document.getElementById('sunSet').addEventListener('click',(e)=>{
    console.log('Clicked insied the sunSet')
    e.stopPropagation() //Because of this stop propogation method the element will not be removed further.
})

//Prevent Default
document.getElementById('google').addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation() //to prevent bubbling
    console.log('google clicked');
})

document.querySelector('#images').addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        console.log(e.target.tagName); //gives the source of the element and then selects parent node
        console.log(e);
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        // removeIt.remove()
        //other method to remove the element
        removeIt.parentNode.removeChild(removeIt) //saves tree traversing
    }
})