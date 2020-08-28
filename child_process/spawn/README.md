# Index.js

Segundo ejemplo ejemplo sobre como funciona child-process de node el cual nos permite hacer ejecuciones en la consola
ademas de ver los procesos de ejecución.

```javascript

const { spawn } = require("child_process")

```

spawn es una funcion del modulo child_process que permite ejecutar comando en la consola al igual que exec pero, te brinda más información

Recibe 2 páramentros:

- command

- flags ( banderas )

```javascript

const process = spawn("ls", ["-l"])

```

La variable process tiene varios valores

- process.killed, si el proceso esta muerto

- standar output

- standar error

```javascript

exec("ls -la", (err, stdout, sterr) => {
    if(err) {
        console.log("Ha ocurrido un error")
        console.log(err)
        return false
    }
    console.log(stdout)
})
console.log("Hei")

```

Puedes válidar si hay algún error para luego utilizar los standar :)