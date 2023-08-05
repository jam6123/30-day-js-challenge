const colors = document.querySelectorAll('[data-color]') 
const pointer = document.querySelector('.pointer')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

ctx.lineWidth = JSON.parse(localStorage.getItem('canvas-settings'))?.pointerSize || 1
ctx.strokeStyle = JSON.parse(localStorage.getItem('canvas-settings'))?.color || 'black'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let canvasSettings = {
    pointerSize: ctx.lineWidth,
    color: ctx.strokeStyle
}

pointer.style.width = `${canvasSettings.pointerSize}px`
togglePointerGuide()

let x
let y
let isMouseDown = false
let wasMouseOut = false

function draw(e) {
    pointer.style.display = 'block'
    followMouseCursor(e)
    if(e.target !== canvas) return
    if(wasMouseOut) {
        wasMouseOut = false
        x = e.offsetX
        y = e.offsetY
        return
    }
    if(!isMouseDown) return
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    x = e.offsetX
    y = e.offsetY
}

window.addEventListener('mousemove', draw)

window.addEventListener('mouseout', function() {
    wasMouseOut = true
})

window.addEventListener('mouseup', function() {
    isMouseDown = false
})

window.addEventListener('wheel', changePointerSize)

window.addEventListener('mousedown', function(e) {
    isMouseDown = true
    x = e.offsetX
    y = e.offsetY
    draw(e)
})

colors.forEach(color => {
    color.style.backgroundColor = color.dataset.color
    color.addEventListener('click', changeColor)
})

function changeColor() {
    ctx.strokeStyle = this.dataset.color
    canvasSettings.color = ctx.strokeStyle
    localStorage.setItem('canvas-settings', JSON.stringify(canvasSettings))
}

// change pointer size 
function changePointerSize(e) {
    canvasSettings.pointerSize = e.deltaY < 0 ? --ctx.lineWidth : ++ctx.lineWidth
    pointer.style.width = `${ctx.lineWidth}px`
    followMouseCursor(e)
    togglePointerGuide()

    localStorage.setItem('canvas-settings', JSON.stringify(canvasSettings))
}

function followMouseCursor(e) {
    pointer.style.left = `${e.clientX - (pointer.offsetWidth / 2)}px`
    pointer.style.top = `${e.clientY - (pointer.offsetHeight/ 2)}px`
}

function togglePointerGuide() {
    if(canvasSettings.pointerSize > 10) return pointer.classList.remove('circle-guide');
    pointer.classList.add('circle-guide');
}