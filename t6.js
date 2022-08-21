var entrada = require("readline-sync");
var numeroSecreto = 10;
do {
  var question = parseInt(entrada.question("Qual o numero secreto: "));
  if (question == numeroSecreto)
    console.log("Voce acertou! O numero secreto é: ", numeroSecreto);
} while (numeroSecreto != question);
