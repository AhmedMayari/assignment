function make_shirts(size: string = "large", message: string = "I love TypeScript") {
    console.log(`You've ordered a ${size}-sized shirt with the message: "${message.toUpperCase()}".`)
}
make_shirts()
make_shirts("medium")
make_shirts("small", "I love my mom")
