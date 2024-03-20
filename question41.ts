function showed_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_greats(magicians: string[]): void {
    magicians.forEach((magician, index, array) => {
        array[index] = "the Great " + magician;
    });
}

let magicians = ["ahmed", "mateen", "ali", "dua", "laiba"];

make_greats(magicians);
showed_magicians(magicians);
