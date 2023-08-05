const form = document.querySelector("form") 
const inputValue = form.querySelector('input')
const quickMinutes = document.querySelectorAll('[data-time]')
const timer = document.querySelector('.timer')

let timerId

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if(!inputValue.value) {
        shakeInput()
        return
    }
    startTimer(inputValue.value * 60)
})

quickMinutes.forEach(el => {
    el.addEventListener('click', function() { startTimer(this.dataset.time) })
})

// start the timer
function startTimer(seconds) {
    clearInterval(timerId)
    displayTime(seconds)
    const now = Date.now()
    const then = now + (seconds * 1000)

    timerId = setInterval(() => {
        const remainingSeconds = Math.round((then - Date.now()) / 1000)
        displayTime(remainingSeconds)
        if(remainingSeconds <= 0) {
            clearInterval(timerId)
        }
    }, 1000)
}

// display the countdown
function displayTime(seconds) {
    const minutesLeft = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60 
    timer.innerText = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
}

let setTimeoutId
// shake input if user enters no value
function shakeInput() {

    inputValue.classList.add('shake')
        clearTimeout(setTimeoutId)
        setTimeoutId = setTimeout(() => {
            inputValue.classList.contains('shake') ? inputValue.classList.remove('shake') : ''
        }, 5000)
}