const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.classList.add('expand')
    })

    card.addEventListener('mouseleave', function(e) {
        this.classList.remove('expand')
    })
})

