// const process = require("process") // opcional

process.on("beforeExit", () => {
    console.log("el proceso va a terminar")
})

// En exit te desconectas del event loop
process.on("exit", () => {
    console.log("el proceso a terminado")
    setTimeout(() => {
        console.log("esto no se va a ejecutar :(");
    }, 0)
})

process.on("uncaughtException", (err, origen) => {
    console.log("vaya se nos ha olvidado capturar un error")
    // Origen es el tipo de error, uncaughtException
    // err devuelve un error
    console.log(err, origen)
})
// functionNotExist()

// process.on("uncaught")
