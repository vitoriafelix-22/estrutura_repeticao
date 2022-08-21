var entrada = require("readline-sync");
var quantidade = parseInt(entrada.question("Quantos paes voce deseja? "));
var valorTotal = 0;
for (i = 1; i <= quantidade; i++) {
  if (i <= 10) {
    valorTotal = valorTotal + 0.18;
    console.log(i, "unidade(s): R$", valorTotal);
  } else if (i >= 11 && i <= 20) {
    valorTotal = valorTotal + 0.16;
    console.log(i, "unidade(s): R$", valorTotal);
  } else if (i >= 21 && i <= 30) {
    valorTotal = valorTotal + 0.13;
    console.log(i, "unidade(s): R$", valorTotal);
  } else {
    valorTotal = valorTotal + 0.09;
    console.log(i, "unidade(s): R$", valorTotal);
  }
}
console.log("O valor total é: ", "R$", valorTotal)