"use strict";
let guestsList = ["ahmed", "mateen", "ali", "dua", "laiba", "mairaj"];
console.log(`You are inviting ${guestsList.length} people to dinner.`);
guestsList.forEach((guest) => {
    console.log(`Dear ${guest.toUpperCase()}, you are invited to dinner at my place.`);
});
