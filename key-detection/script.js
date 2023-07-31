let keys = []

window.addEventListener('keydown', function(e) {
    keys.push(e.key)
    keys.splice(-8, keys.length - 7)
   
    if(keys.join('').includes('hesoyam')) {
        console.log('yes')
    }
})
