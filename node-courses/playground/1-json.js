const fs = require("fs")

const book = {
    title: 'Ego is enemy',
    author: 'pm',
}

//ES6.........

const square = (x) => {
    return x*x
}
const squareALt = (x) => x*x

//this keyword use

const event = {
    name: 'BirthDay party',
    guestList: ['pooja' , 'kundan' , 'chandan'],
    printGuestList() {
        console.log('guest list for' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name) 
        })
    }
}
event.printGuestList()

const array1 = [5,676,7,20,4,90]
const found = array1.find(element => element>10)
const users = [{
    name: 'pooja',
    age: '20'
},{
    name: 'kundan',
    age: '18',

}, {
    name: 'chandan',
    age: '25'
}
]
const user = users.find((user) => user.name === 'George hudson')
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'banana', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries))


console.log('starting')

setTimeout(() => {
    console.log('1 minute timer')
},2000)

console.log('stopping')



console.log(users)



console.log(found)




console.log(squareALt(8))


console.log(square(90))


const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
fs.writeFileSync('1-json.json', bookJSON)

//create new json file

//using fs you can create any file like txt, json etc..

fs.writeFileSync('1-json.json' , bookJSON)
const dataBuffer =  fs.readFileSync('1-json.json')

const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)