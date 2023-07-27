const secondHandContainer = document.querySelector('.second-hand-container')
const minuteHand = document.querySelector('.clock__minute-hand')
const hourHand = document.querySelector('.clock__hour-hand')

/*  I just used this to set the position of secondhand's container
    to make second hand accurate in real time   */
const now = new Date()
const secondDeg = (now.getSeconds() / 60) * 360 
secondHandContainer.style.rotate = `${secondDeg}deg`

function setTime() {
    const now = new Date()
    
    const minuteDeg = (now.getMinutes() / 60) * 360
    minuteHand.style.rotate = `${minuteDeg}deg`
    
    const hourDeg = (now.getHours() / 12) * 360
    hourHand.style.rotate = `${hourDeg}deg`
}
setInterval(setTime, 1000)

// I call this to position the clock's hands immediately at first load
setTime() 
