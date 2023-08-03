const video = document.querySelector('video')
const speedController = document.querySelector('.speed-controller')
const speed = document.querySelector('.speed')
const speedValue = document.querySelector('.speed-value')

let isMouseDown = false

function moveSpeed(e) {
    if(!isMouseDown) return

    const y = e.clientY - this.offsetTop
    const percentage = y / this.offsetHeight
    const height = Math.round(percentage * 100)
    const min = 0.4
    const max = 4
    const playbackRate = (percentage * (max - min) + min).toFixed(1)
    video.playbackRate = playbackRate
    speed.style.height = height + '%'
    speedValue.innerText = playbackRate + 'x'
}

speedController.addEventListener('mousemove', moveSpeed)

speedController.addEventListener('mousedown', function(e) {
    isMouseDown = true
})

speedController.addEventListener('mouseup', function(e) {
    isMouseDown = false
})