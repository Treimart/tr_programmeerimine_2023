// Luua array numbritega ja leida spetsiifilise numbri index

const array = [1, 3, 4, 6, 13, 35, 39, 52, "infinity"]

function findMyIndex(array, element) {
    return array.indexOf(element)
}

console.log(findMyIndex(array, 4))

// Arrow functions

function sumTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumTwoNumbers(5, 4))

const arrowFunction = (n1, n2) => {
    return n1 + n2
}
const arrowFunction2 = (n1, n2) => n1 + n2

console.log(arrowFunction(8, 5))
console.log(arrowFunction2(8, 5))

// Nested

/*function addNumbers2(num1, num2) {
    return function addNumbersHelper(num2) {
        return num1 + num2
    }
}

console.log(addNumbers2(3)(4))*/

// Looge samast funktsioonist array funktsioon

const addNumbers3 = num1 => num2 => num1 + num2;

console.log(addNumbers3(10)(16))

// AF printida "Hello (nimi)" ja kasutada string literals

//const myName = "Marten"
//const name = 'Name is ${myName}'

const nameString = (name) => `Name is ${name}`

console.log(nameString("Märten"))


const numberArray = [1, 2, 3, 4, 5]


const newArray = numberArray.map((element, index, array) => {
    console.log({
        element,
        newElement: element + 5,
        index,
        array
    })

    return element + 5
})

console.log(newArray)

// Filter
const filteredArray = numberArray.filter(element => element < 4)

console.log({numberArray, filteredArray})


const names = ["Juku", "Mari", "Jaan", "Anni"]

const data = names.map(name => {
    return {
        name,
        age: name.length + 20,
        email: name.toLowerCase() + "@company.com",
        address: name + " Street 55",
        username: name.split("").reverse().join(""),
    }
})

console.log(data)

const newJuku = {
    ...data[0],
    height: 175
}

console.log({ newJuku })

const evenNewerJuku = {
    ...newJuku,
    age: 32
}

console.log({ evenNewerJuku })