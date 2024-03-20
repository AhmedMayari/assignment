"use strict";
function make_shirt(size, message) {
    console.log(`You've ordered a ${size}-sized shirt with the message: "${message.toUpperCase()}".`);
}
let size = "small";
let message = "i love my mom";
make_shirt(size, message);
