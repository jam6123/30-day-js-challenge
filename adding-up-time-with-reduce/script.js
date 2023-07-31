const videos = Array.from(document.querySelectorAll('[data-time]'))

const seconds = videos.map(video => video.dataset.time.split(':').map(Number))
                         .map(time => {
                            const[minute, second] = time
                            return (minute * 60) + second
                         })
                         .reduce((total, seconds) => {
                            return total + seconds
                         })


let secondsLeft;

// get hours then round down
const hours = Math.floor(seconds / 3600)
// get remaining seconds from above
secondsLeft = seconds % 3600

// get minutes then round down
const minutes = Math.floor(secondsLeft / 60)
// get remaining seconds from above
secondsLeft = secondsLeft % 60


console.log(`${hours}:${minutes}:${secondsLeft}`)


