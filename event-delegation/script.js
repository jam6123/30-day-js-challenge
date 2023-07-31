const form = document.querySelector('form')
const groceries = document.querySelector('.groceries')
const footerBtns = document.querySelectorAll('footer button')

let groceryItems = JSON.parse(localStorage.getItem('grocery-items')) || []

groceryItems.forEach(item => {
    populateList(item)
})

form.addEventListener('submit', addNewItem)

function addNewItem(e) {
    e.preventDefault()
    const inputValue = this.querySelector('input').value.trim()
    if(!inputValue) return
    const id = 'item_' + Date.now()
    const item = {
        bought: false,
        label: inputValue,
        id: id
    }
    groceryItems.push(item) 
    populateList(item)
    localStorage.setItem('grocery-items', JSON.stringify(groceryItems))
    this.reset()
}

function populateList(item) {
    const li = document.createElement('li')
    li.id = item.id
    li.innerHTML = `
                    <input type="checkbox" ${item.bought ? 'checked' : ''}>
                    <labe>${item.label}</label> 
                   `
    groceries.appendChild(li)
}

groceries.addEventListener('click', toggleCheck)

function toggleCheck(e) {
    if(!e.target.matches('input[type="checkbox"]')) return

    const id = e.target.parentElement.id
    const item = groceryItems.find(item => item.id == id)
    item.bought = !item.bought
    localStorage.setItem('grocery-items', JSON.stringify(groceryItems))
}

footerBtns.forEach(btn => {
    switch(btn.id) {
        case "delete-all-btn":
            btn.addEventListener('click', deleteItems)
            break
        case "check-all-btn":
            btn.addEventListener('click', checkAll)
            break
        case "uncheck-all-btn":
            btn.addEventListener('click', unCheckAll)
            break
    }
})

function deleteItems() {
    groceries.innerHTML = ""
    groceryItems.length = 0
    localStorage.setItem('grocery-items', JSON.stringify(groceryItems))
}

function checkAll() {
    const checkBoxes = groceries.querySelectorAll('input[type="checkbox"]')
    checkBoxes.forEach(checkBox => {
        checkBox.checked = true
    })
    groceryItems.forEach(item => {
        item.bought = true
    })
    localStorage.setItem('grocery-items', JSON.stringify(groceryItems))
}

function unCheckAll() { 
    const checkBoxes = groceries.querySelectorAll('input[type="checkbox"]')
    checkBoxes.forEach(checkBox => {
        checkBox.checked = false
    })
    groceryItems.forEach(item => {
        item.bought = false
    })
    localStorage.setItem('grocery-items', JSON.stringify(groceryItems))
}