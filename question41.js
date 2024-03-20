"use strict";
function showed_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_greats(magicians) {
    magicians.forEach((magician, index, array) => {
        array[index] = "the Great " + magician;
    });
}
let magicians = ["ahmed", "mateen", "ali", "dua", "laiba"];
make_greats(magicians);
showed_magicians(magicians);
