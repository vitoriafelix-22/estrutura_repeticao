var entrada = require("readline-sync");
for (i = 0; i <= 10; i++) {
  var numero = parseInt(entrada.question("Me diga um valor: "));
  if (numero % 2 == 0) {
    console.log("O numero digitado ", numero, "é par: ");
  } else {
    console.log("O numero digitado ", numero, "é impar");
  }
}
