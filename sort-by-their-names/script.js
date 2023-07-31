const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']
const ul = document.querySelector('ul')

bands.sort((a, b) => trim(a) > trim(b) ? 1 : -1)

// remove word 'the', 'an', or 'a'
function trim(word) {
    return word.replace(/^(a |an |the )/i, '').trim()
}

ul.innerHTML = bands.map(band => `<li>${band}</li>`).join('')