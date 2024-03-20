"use strict";
function make_shirts(size = "large", message = "I love TypeScript") {
    console.log(`You've ordered a ${size}-sized shirt with the message: "${message.toUpperCase()}".`);
}
make_shirts();
make_shirts("medium");
make_shirts("small", "I love my mom");
