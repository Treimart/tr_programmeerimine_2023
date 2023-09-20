let a = 1
let b = 2
let c = 0

console.log(a+b)

c = a
a = b
b = c

console.log(a)
console.log(b)

const Raimo = {
    name: "Raimo",
    school: "TLU",
    "dreams etc": "😁"
}

console.log(Raimo.name + ' ' +Raimo.school)
console.log(Raimo["name"] + ' ' + Raimo["dreams etc"])