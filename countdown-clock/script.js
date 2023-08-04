const form = document.querySelector("form") 
const inputValue = form.querySelector('input')
const quickMinutes = document.querySelectorAll('[data-time]')
const timer = document.querySelector('.timer')

let timerId

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if(!inputValue.value) return
    startTimer(inputValue.value * 60)
})

quickMinutes.forEach(el => {
    el.addEventListener('click', function() { startTimer(this.dataset.time) })
})

function startTimer(seconds) {
    clearInterval(timerId)
    const now = Date.now()
    const then = now + (seconds * 1000)
    displayTime(seconds)
    timerId = setInterval(() => {
        const remainingSeconds = Math.round((then - Date.now()) / 1000)
        displayTime(remainingSeconds)
        if(remainingSeconds <= 0) {
            clearInterval(timerId)
        }
    }, 1000)
}

function displayTime(seconds) {
    const minutesLeft = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60 
    timer.innerText = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
}