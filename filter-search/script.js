const suggestions = document.querySelector('[data-suggestions]')
const input = document.querySelector('input')

const endPoint = 'https://countriesnow.space/api/v0.1/countries/cities'
const country = "united states"

async function getCities() {
    const prom = await fetch(endPoint, {
            method: 'POST',
            body: JSON.stringify({
                country: country
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
    const data = await prom.json()
    const cities = data.data

    input.addEventListener('input', showCities)
    
    // find matches key word
    function findMatches(wordToMatch) {
        const reg = new RegExp(`^${wordToMatch}`, 'gi')

        return cities.filter(place => {
            return reg.test(place)
        })
    }
    
    // display matches cities
    function showCities() {
        const inputValue = this.value.toLowerCase().trim()
        if(!inputValue) {
            suggestions.innerHTML = ''
            return
        }

        const foundMatches = findMatches(inputValue).slice(0, 13)
        let html = foundMatches.map(place => {
            const reg = new RegExp(inputValue, 'i')
            const city = place.replace(reg, `<span class="hl">${inputValue}</span>`)

            return `<li>${city}</li>`
        }).join('')
        
        suggestions.innerHTML = html
    }
    
}

getCities()


// LEARNED

// regex.test()
// string.replace()
// array.splice()
