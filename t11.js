var entrada = require("readline-sync")
var numero = parseInt(entrada.question("Me informe um valor de 1 a 9: "))
for(i=0; i<=10; i++){
    console.log(numero, "x", i, "=", numero * i)
}
