const payemntsDropdown = document.querySelector('.payments__dropdown')
const followingBg = document.querySelector('.following-bg')
const links = document.querySelectorAll('a')

let lastHoveredLink = null

links.forEach(link => {
    link.addEventListener('mouseenter', function(e) {
        hideDropdown()
        
        // select dropdown of currently hovered link
        const currentDropdown = link.parentElement.querySelector('.dropdown')
        // save it to a variable so we can access the last dropdown
        lastHoveredLink = currentDropdown

        const yDistance = currentDropdown.parentElement.offsetTop + currentDropdown.offsetTop
        const xDistance = currentDropdown.getBoundingClientRect().left

        // get dimensions of current dropdown
        const width = currentDropdown.getBoundingClientRect().width
        const height = currentDropdown.getBoundingClientRect().height

        currentDropdown.style.opacity = "1"
        currentDropdown.style.visibility = "visible"
        currentDropdown.firstElementChild.style.translate = "0% 0%"

        followingBg.style.visibility = "visible"
        followingBg.style.transition = ".3s"
        followingBg.style.opacity = "1"
        followingBg.style.top = `${yDistance}px`
        followingBg.style.left = `${xDistance}px`
        followingBg.style.width = `${width}px`
        followingBg.style.height = `${height}px`
    })
})

// hide last showed dropdown
function hideDropdown() {
    lastHoveredLink?.removeAttribute('style')
    lastHoveredLink?.firstElementChild.removeAttribute('style')
}

document.body.addEventListener('click', removeDropdown)

// remove dropdown
function removeDropdown(e) {
    if(e.target.tagName !== 'BODY') return
    
    lastHoveredLink?.removeAttribute('style')
    lastHoveredLink?.firstElementChild.removeAttribute('style')
    followingBg.removeAttribute('style')
}