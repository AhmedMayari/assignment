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