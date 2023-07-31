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
    geolocation.coords.speed = randomValues[Math.floor(Math.random() * 18)]

    compass.style.rotate = `${geolocation.coords.heading}deg`
    speedValue.innerText = `${geolocation.coords.speed}`
},1000)
