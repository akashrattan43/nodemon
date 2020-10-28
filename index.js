const fs = require('fs')

fs.writeFileSync('hello.txt', 'Hello from another file system')

const hobbies = ['sports', 'cricket']

console.log(hobbies.map(Hobby => ('Hobby: ' + Hobby)))

hobbies.push('tennis')
console.log(hobbies)

const copy = [...hobbies]
console.log(copy)

const person = {
    name: 'ak',
    age: 26
}

const printName = ({name}) => {
    console.log(name)
}


printName(person)

