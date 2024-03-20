let Name = "what is your name?";
console.log("Upper Case:",Name.toUpperCase())
console.log("Lower Case:",Name.toLowerCase())
console.log("Title Case:",Name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()));
