const body = document.body
const h1 = document.querySelector('h1')

body.addEventListener('mousemove', function(e) {

    // get the middle point of the body element
    let x = e.offsetX - (body.offsetWidth / 2)
    let y = e.offsetY - (body.offsetHeight / 2)
    if(e.target !== this) {
        x += e.target.offsetLeft
        y += e.target.offsetTop
    }

    // get values that we will be using for our text-shadow based on mouse direction
    const xWalk = Math.round(x / 100 * 3)
    const yWalk = Math.round(y / 100 * 3)

    // apply the value
    h1.style.textShadow = `${xWalk}px ${yWalk}px 0 yellow,
                           ${xWalk * 2}px ${yWalk * 2}px 0 green,
                           ${-xWalk}px ${-yWalk}px 0 orange`
})
