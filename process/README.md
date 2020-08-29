# Diferencia entre beforeExit y exit

una vez que se ejecuta exit, se desconecta del event loop por lo cual un setTimeout no se va a ejecutar nunca

``` javascript
process.on("exit", () => {
    console.log("el proceso a terminado")
    setTimeout(() => {
        console.log("esto no se va a ejecutar :(");
    }, 0)
})

```