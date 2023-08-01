const compass = document.querySelector('.compass')
const speedValue = document.querySelector('.speed__value')
// navigator.geolocation.watchPosition((data) => {
//     console.log(data)
// })

const randomValues = []

for(let i=0; i<=360; i += 20) {
    randomValues.push(i)
}

// fake geolocations's data
const geolocation = {coords: {
                        heading: 30,
                        speed: 20
                    }}

setInterval(() => {
    geolocation.coords.heading = randomValues[Math.floor(Math.random() * 18)]
    compass.style.rotate = `${geolocation.coords.heading}deg`
}, 1000)

setInterval(() => {
    geolocation.coords.speed = randomValues[Math.floor(Math.random() * 18)]
    speedValue.innerText = `${geolocation.coords.speed}`
    if(geolocation.coords.speed < 120) {
        speedValue.style.color = 'white' 
    }else if(geolocation.coords.speed < 240) {
        speedValue.style.color = 'orange' 
    }else {
        speedValue.style.color = 'red' 
    }
}, 2500)
