var entrada = require("readline-sync");
var referencia = 0;
for (i = 0; i < 10; i++) {
  var numero = parseInt(entrada.question("Me informe um valor inteiro: "));
  if (i == 0) {
    referencia = numero;
  }
  if (numero < referencia) {
    referencia = numero;
  }
}
console.log("O menor numero dos 10 é: ", referencia);
