"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_magicians = void 0;
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
exports.show_magicians = show_magicians;
let magicians = ["ahmed", "mateen", "ali", "dua", "laiba"];
show_magicians(magicians);
