const images = document.querySelectorAll('img')

window.addEventListener('scroll', sliceImages)


function sliceImages(e) {
    images.forEach(image => {
        const ishalfOfImage = window.scrollY + window.innerHeight - (image.height /2) > image.offsetTop
        const isImageFullyOnTop = image.offsetTop < (window.scrollY - image.height)
        const isImageFullyOnBOttom = (window.scrollY + window.innerHeight) < image.offsetTop

        if(ishalfOfImage) {
            image.classList.add('reveal')
        } 
        if(isImageFullyOnTop || isImageFullyOnBOttom) {
            image.classList.remove('reveal')
        }
    })
}
