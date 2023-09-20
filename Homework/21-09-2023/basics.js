// Arrow function

const subtractNumbers = (num1, num2) => {
    return num1 - num2
}

console.log(subtractNumbers(8, 3))

// Shorthand arrow function

const multipleNumbers = (num1, num2) => num1 * num2

console.log(multipleNumbers(3, 5))

// String literal

const countryString = (country) => `I live in ${country}`

console.log(countryString("Estonia"))

// map

const items = ["Milk", "Chocolate", "Watermelon", "Pepper", "Fish"]

const data = items.map(item => {
    return {
        item,
        id: `${item.toLowerCase()}` + "item",
        weight: item.length * 4 + " g",
        price: item.length * 8 + " cents"
    }
})

console.log(data[1])

// Spread syntax

const milk = data[0]

const newMilk = {
    ...milk,
    liter: 1 + " l"
}

console.log(newMilk)

// filter

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oddNumberFilter = numberArray.filter(element => element % 2 === 0)

console.log({ numberArray, oddNumberFilter })

// Reduce function

const numbers = [1, 2, 3, 4, 5]

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

console.log(sum)