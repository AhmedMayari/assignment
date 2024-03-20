let string1 = 'hello';
let string2 = 'world';
let number1 = 10;
let number2 = 5;
let array = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is string1 equal to string2? I predict False.")
if (string1 == string2) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is string1 not equal to string2? I predict True.")
if (string1 != string2) {
    console.log(true)
} else {
    console.log(false)
}

// Tests using the lower case function
console.log("Is string1 in lowercase equal to 'hello'? I predict True.")
if (string1.toLowerCase() == 'hello') {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is string2 in lowercase equal to 'world'? I predict True.")
if (string2.toLowerCase() == 'WORLD') {
    console.log(true)
} else {
    console.log(false)
}

//tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number1 equal to number2? I predict False.")
if (number1 == number2) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is number1 not equal to number2? I predict True.")
if (number1 != number2) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is number1 greater than number2? I predict True.")
if (number1 > number2) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is number1 less than number2? I predict False.")
if (number1 < number2) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is number1 greater than or equal to number2? I predict True.")
if (number1 >= number2) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is number1 less than or equal to number2? I predict False.")
if (number1 <= number2) {
    console.log(true)
} else {
    console.log(false)
}

// Tests using "and" and "or" operators
console.log("Is number1 greater than 5 and number2 less than 10? I predict True.")
if (number1 > 5 && number2 < 10) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is number1 greater than 5 and number2 greater than 10? I predict False.")
if (number1 > 5 && number2 > 10) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is number1 greater than 5 or number2 greater than 10? I predict True.")
if (number1 > 5 || number2 > 10) {
    console.log(true)
} else {
    console.log(false)
}

console.log("Is number1 less than 5 or number2 less than 10? I predict True.")
if (number1 < 5 || number2 < 10) {
    console.log(true)
} else {
    console.log(false)
}

// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.")
if (array.includes(3)) {
    console.log(true)
} else {
    console.log(false)
}

// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.")
if (!array.includes(6)) {
    console.log(true)
} else {
    console.log(false)
}
