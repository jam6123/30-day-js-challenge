const links = document.querySelectorAll('a')
const hl = document.querySelector('.highlight')

links.forEach(link => {
    link.addEventListener('mouseenter', function(e) {
        hl.style.top = `${link.offsetTop}px`
        hl.style.left = `${link.offsetLeft}px`
        hl.style.width = `${link.offsetWidth}px`
        hl.style.height = `${link.offsetHeight}px`
        hl.style.opacity = '1'
        console.log(link.getBoundingClientRect(), link.of)
    })
})

/*
    offsetLeft = distance of the element from its parent's left corner (parent's margin is not included)
    offsetTop, offsetLeft, are relative to its parent element.
    element.getBoundingClientRect().top, left, are relative to screen.
*/