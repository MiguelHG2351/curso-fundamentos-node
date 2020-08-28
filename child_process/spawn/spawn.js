const { spawn } = require("child_process")

const process = spawn("ls", ["-l"])

console.log(process.pid)

process.stdout.on("data", () => {
    console.log(process.killed)
    console.log("El proceso tiene la data")
})

// process.stdout.on('data', (data) => {
//     console.log(data.toString())
// })

process.on("exit", () => {
    console.log("El proceso termino bye :)")
})