//const square = function (x) {
  //  return x*x
//}

//console.log(square(5))

const square = (x) => x * x
console.log(square(2))

const event = {
    name: "birthday party",
    guestList: ['pooja ', 'kundna'],
    printGuestList ()  {
        const that = this
        
        console.log('guest list for ' + this.name)
        this.guestList.forEach( (guest) => {
            console.log(guest + 'is attending ' + that.name)
        })
    }
}

event.printGuestList()