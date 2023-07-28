const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('mousemove', updateProperties)
    input.addEventListener('change', updateProperties)
})

function updateProperties() {
    const suffix = this.dataset.suffix || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}