//Dua Amir
//code 1
//storing the message in the variable
Name = "what is your name?";
//this pint the message in upper case
console.log("Upper Case:",Name.toUpperCase())
//this print the message in lower case
console.log("Lower Case:",Name.toLowerCase())
//this print the message in tittle case
//the algorithm behind this line
// This line replaces each word (\w\S*) in the string stored in the variable Name with a modified version of itself
// It uses a regular expression to find all matches of words in the string
// For each match, it executes a callback function that takes the matched word (txt) as input
// Inside the callback function
// txt.charAt(0).toUpperCase() capitalizes the first character of the word
// txt.substring(1).toLowerCase() converts the rest of the word to lowercase
console.log("Title Case:",Name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()));

//code 2
//storing the message in the variable with extra spaces
StrippingName = "\tEric\n";
//printting the message with extra spaces
console.log(StrippingName);
//printting the message by removing extra spaces
console.log(StrippingName.trim());