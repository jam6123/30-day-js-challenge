window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.key[data-key="${e.key}"]`)
    if(!key)  return;
    const keyAudio = document.querySelector(`audio[data-key="${e.key}"]`)
    key.addEventListener('transitionend', function(){ removeClass(key) })

    key.classList.add('playing')
    keyAudio.currentTime = 0
    keyAudio.play()
})


function removeClass(key) {
    key.classList.remove('playing')
}