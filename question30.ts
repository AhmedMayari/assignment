let userNames = ["admin", "ahmed", "mateen", "ali", "dua", "laiba"]
userNames = []

if (userNames.length === 0) {
    console.log("We need to find some users!")
} else {
    for (const username of userNames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`)
        }
    }
}
