const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let x
let y
let color = 0
let isDrawing = false
let directionUp = true

function draw(e) {
    if(!isDrawing) return
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`
    
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    x = e.offsetX
    y = e.offsetY
    
    color++
    if(color >= 360) {
        color = 0
    }
    if(ctx.lineWidth == 100 || ctx.lineWidth == 1) {
        directionUp = !directionUp
    }
    directionUp ? ctx.lineWidth++ : ctx.lineWidth--
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', function(e) {
    isDrawing = true
    x = e.offsetX
    y = e.offsetY
})
canvas.addEventListener('mouseup', function(e) {
    isDrawing = false
})
