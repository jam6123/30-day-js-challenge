const container = document.querySelector('.container')
const style = window.getComputedStyle(container)
const containerWidth = container.offsetWidth + parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)

let clickSpot = 0
let isMouseDown = false
let scrolledValue = 0
let previousScrolledValue = 0

container.addEventListener('mousedown', function(e) {
    clickSpot = e.clientX
    isMouseDown = true
})

container.addEventListener('mouseup', function(e) {
    isMouseDown = false
    previousScrolledValue = scrolledValue
})

container.addEventListener('mousemove', function(e) {
    if(!isMouseDown) return
    scrolledValue = clickSpot - e.clientX + previousScrolledValue

    if(scrolledValue < 0) scrolledValue = 0
    if(scrolledValue > containerWidth) scrolledValue = containerWidth
    container.scrollLeft = scrolledValue
})

container.addEventListener('mouseleave', function() {
    isMouseDown = false
})