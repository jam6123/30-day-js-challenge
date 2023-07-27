const secondHandContainer = document.querySelector('.second-hand-container')
const minuteHandContainer = document.querySelector('.minute-hand-container')
const hourHandContainer = document.querySelector('.hour-hand-container')

function setTime() {
    const now = new Date()

    const secondDeg = (now.getSeconds() / 60) * 360 
    secondHandContainer.style.rotate = `${secondDeg}deg`
    
    const minuteDeg = (now.getMinutes() / 60) * 360
    minuteHandContainer.style.rotate = `${minuteDeg}deg`
    
    const hourDeg = (now.getHours() / 12) * 360
    hourHandContainer.style.rotate = `${hourDeg}deg`
}

// I call this to position the clock's hands immediately at first load
setTime() 
