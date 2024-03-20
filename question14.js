"use strict";
guestList = ["ahmed", "mateen", "ali", "dua", "laiba", "mairaj"];
console.log(guestList);
console.log(`${guestList[2]} can't make it to dinner.`);
guestList[2] = "fatima";
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}
