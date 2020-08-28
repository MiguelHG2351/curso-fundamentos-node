# Index.js

Primer ejemplo sobre como funciona child-process de node el cual nos permite hacer ejecuciones en la consola
ademas de ver los procesos de ejecución.

```javascript

const { exec } = require("child_process")

```

exec es una funcion del modulo child_process que permite ejecutar comando en la consola,

Recibe 2 páramentros:

- command

- Callback

El callback recibe 3 parámetros

- error

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