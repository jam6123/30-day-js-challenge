const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
let lastChecked

checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', function(e) {
        let inBetween = false

        if(e.shiftKey && this.checked) {
            checkBoxes.forEach(checkElement => {
                if(checkElement == checkBox || checkElement == lastChecked) {
                    inBetween = !inBetween
                }
                inBetween ? checkElement.checked = true : ''
            })
        }

        lastChecked = checkBox
    })
   
})
