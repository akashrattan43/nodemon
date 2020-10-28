// const fs = require('fs')

// fs.writeFileSync('hello.txt', 'Hello from another file system')

// const hobbies = ['sports', 'cricket']

// console.log(hobbies.map(Hobby => ('Hobby: ' + Hobby)))

// hobbies.push('tennis')
// console.log(hobbies)

// const copy = [...hobbies]
// console.log(copy)

// const person = {
//     name: 'ak',
//     age: 26
// }

// const printName = ({name}) => {
//     console.log(name)
// }

// printName(person)

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1500)
    });
   return promise;
}

setTimeout(() => {
    console.log('Timer is done!')
    fetchData().then(text => {
        console.log(text)
        fetchData().then(text2 => {
            console.log(text)
        })
    })
}, 2000)

console.log('hello')