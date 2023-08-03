const nav = document.querySelector('nav')

const observer = new IntersectionObserver((entries, observer) => {
    if(entries[0].isIntersecting) {
        nav.firstElementChild.classList.remove('reveal')
    }else
        nav.firstElementChild.classList.add('reveal')

}, {rootMargin: '-1px 0px 0px 0px', threshold: 1.0})

observer.observe(nav)

// It triggers on load by default.
// treshold means the visibility of the target ( 1.0 means 100% )
// intersection will be triggered when the target has intersected to its root ancestor ( default is viewport )
// we use rootMargin to set margin to be able the target to intersect ( when the target reaches the margin event will be triggered)