const people = [
    { name: "Albert Einstein", born: "March 14, 1879", passed: "April 18, 1955" },
    { name: "Marie Curie", born: "November 7, 1867", passed: "July 4, 1934" },
    { name: "Stephen Hawking", born: "January 8, 1942", passed: "March 14, 2018" },
    { name: "Nikola Tesla", born: "July 10, 1856", passed: "January 7, 1943" },
    { name: "Ada Lovelace", born: "December 10, 1815", passed: "November 27, 1852" },
    { name: "Isaac Newton", born: "January 4, 1643", passed: "March 31, 1727" },
    { name: "Alan Turing", born: "June 23, 1912", passed: "June 7, 1954" },
    { name: "Grace Hopper", born: "December 9, 1906", passed: "January 1, 1992" },
    { name: "Richard Feynman", born: "May 11, 1918", passed: "February 15, 1988" },
    { name: "Carl Sagan", born: "November 9, 1934", passed: "December 20, 1996" }
];

// sort in ascending order by their age
people.sort((a, b) => {
    const lastGuy = a.passed.slice(-4) - a.born.slice(-4)
    const nextGuy = b.passed.slice(-4) - b.born.slice(-4)
    return lastGuy - nextGuy
})

// sort in ascending orde by their last name
people.sort((last, next) => {
    const aLastName = last.name.slice(last.name.indexOf(' ') + 1)
    const bLastName = next.name.slice(next.name.indexOf(' ') + 1)
    return aLastName > bLastName ? 1 : -1
})

// add an age property to every object in our array
people.forEach(person => person.age = person.passed.slice(-4) - person.born.slice(-4))


///////////////////////////////////////////////////////////////////////////////////////////
const fruits = ["apple", "banana", "orange", "kiwi", "apple", "mango", "orange", "orange", "apple", "banana", "orange", "kiwi", "mango", "apple", "apple", "orange", "kiwi", "banana", "banana", "orange", "mango", "kiwi", "apple", "orange"]

const fruitType = fruits.reduce(function(obj, fruit) {
    if(!obj[fruit]) obj[fruit] = 0;

    obj[fruit]++
    return obj
}, {})
