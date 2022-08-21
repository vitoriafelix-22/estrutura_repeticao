var entrada = require("readline-sync");
do {
  var palavra1 = entrada.question("Voce deseja continuar? ");
  if (palavra1 == "sim") {
    console.log("Voce decidiu continuar!");
  } else if (palavra1 == "nao") {
    console.log("Voce saiu!");
  } else {
    console.log("Palavra invalida");
  }
} while (palavra1 != "nao");
