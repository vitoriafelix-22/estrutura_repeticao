var entrada = require("readline-sync");
var refMaior = 0;
var refMenor = 0;
var refMedia = 0;
var soma = 0;
for (i = 0; i < 5; i++) {
  var distanciaSalto = parseInt(entrada.question("Qual foi a distancia atingida? "));
  if (i == 0) {
    refMaior = distanciaSalto;
    refMenor = distanciaSalto;
  }
  if (distanciaSalto > refMaior) {
    refMaior = distanciaSalto;
  }
  if (distanciaSalto < refMenor) {
    refMenor = distanciaSalto;
  }
  soma = distanciaSalto + soma;
}
console.log("O menor salto é: ", refMenor);
console.log("O maior salto é: ", refMaior);
console.log("A media dos saltos é: ", soma / 5);
