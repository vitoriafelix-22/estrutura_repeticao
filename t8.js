var entrada = require("readline-sync");
var inicio = parseInt(entrada.question("Me informe um valor entre 0 e 20: "));
var final = parseInt(entrada.question("Me informe um valor entre 0 e 20: "));
for (var i = inicio + 1; i < final; i++) {
  console.log(i);
}
