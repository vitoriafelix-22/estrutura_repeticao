var entrada = require("readline-sync");
var somaPar = 0;
var somaImpar = 0;
for (i = 0; i < 10; i++) {
  var numero = parseInt(entrada.question("Me diga um valor: "));
  if (numero % 2 == 0) {
    somaPar = 1 + somaPar;
  } else if (numero % 2 == 1) {
    somaImpar = 1 + somaImpar;
  }
}
console.log(somaPar);
console.log(somaImpar);
