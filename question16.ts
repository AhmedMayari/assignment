guestList = ["ahmed", "mateen", "ali", "dua", "laiba", "mairaj", "aiman"]
console.log(guestList)
console.log(`${guestList[2]} can't make it to dinner.`)
guestList[2] = "fatima"
console.log("I found a bigger dinner table, so I can invite more guests.")
guestList.unshift("anum")
guestList.splice(Math.floor(guestList.length / 2), 0, "asad")
guestList.push("Umar")
guestList.forEach((guest) => {
    console.log(`Dear ${guest.toUpperCase()}, you are invited to dinner at my place.`)
})
console.log("I can only invite two people for dinner.")
while (guestList.length > 2) {
    console.log(`I'm sorry ${guestList.pop()}, I can't invite you to dinner.`)
}
guestList.forEach((guest) => {
    console.log(`Dear ${guest.toUpperCase()}, you are still invited to dinner at my place.`)
})
guestList.pop()
guestList.pop()
console.log(guestList)