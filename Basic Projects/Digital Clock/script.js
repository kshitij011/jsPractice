const timeArea = document.querySelector('.clock')

console.log(timeArea.innerHTML)


setInterval(()=>{
    let time = new Date()
    timeArea.innerHTML =time.toLocaleTimeString()
}, 1000)