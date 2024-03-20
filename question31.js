"use strict";
let current_users = ["ahmed", "mateen", "ali", "dua", "laiba"];
let new_users = ["anum", "mairaj", "Laiba", "aiman", "Dua", "Ahmed"];
for (let new_user of new_users) {
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`The username ${new_user} is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username ${new_user} is available.`);
    }
}
