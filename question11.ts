let greetingNames = ["dua", "ahmed", "laiba", "mateen"]
greetingNames.forEach((name) => {
    console.log(`good morning ${name}`.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()))
});