const select = document.querySelector('select')
const speakBtn = document.querySelector('#speak-btn')
const stopBtn = document.querySelector('#stop-btn')
const textToSay = document.querySelector('textarea')
const rangeInputs = document.querySelectorAll('input')

const speech = new SpeechSynthesisUtterance()
let voices = []

speechSynthesis.addEventListener('voiceschanged', function() {
    voices = this.getVoices()
    select.innerHTML = voices.map(voice => {
        return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    })
})

// change voice
select.addEventListener('change', function(e) {
    speech.voice = voices.find(voice => voice.name === this.value)
    speak()
})

// start speaking 
speakBtn.addEventListener("click", function(e) {
    speech.text = textToSay.value
    speak()
})

// change pitch
rangeInputs.forEach(input => {
    input.addEventListener('change', function() {
        speech[this.id] = this.value
    })
})

// stop speaking
stopBtn.addEventListener('click', function() {
    speechSynthesis.cancel()
})

// speak 
function speak() {
    speechSynthesis.cancel()
    speechSynthesis.speak(speech)
}