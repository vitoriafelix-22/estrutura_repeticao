var entrada = require("readline-sync");
var soma = 0;
for (i = 0; i < 5; i++) {
  var numeros = parseInt(entrada.question("Me diga um valor: "));
  soma = numeros + soma;
}
console.log("A soma dos numeros é: ", soma);
console.log("A media dos numeros é: ", soma / 5);
