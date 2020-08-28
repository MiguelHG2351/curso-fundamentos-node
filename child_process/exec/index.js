const { exec } = require("child_process")

exec("node spawn.js", (err, stdout, sterr) => {
    if(err) {
        console.log("Ha ocurrido un error")
        console.log(err)
        return false
    }
})
console.log("Hei")