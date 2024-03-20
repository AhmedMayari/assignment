"use strict";
function shows_magicans(magicans) {
    magicans.forEach(magician => console.log(magician));
}
function make_great(magicans) {
    const greatmagicans = [...magicans];
    greatmagicans.forEach((magician, index, array) => {
        array[index] = "the Great " + magician;
    });
    return greatmagicans;
}
const magicans = ["ahmed", "mateen", "ali", "dua", "laiba"];
const newmagicans = make_great(magicans.slice());
shows_magicans(magicans);
shows_magicans(newmagicans);
