var entrada = require("readline-sync");
do {
  var nome = entrada.question("Me informe seu nome de usuario: ");
  var senha = entrada.question("Me informe sua senha: ");
  if (nome == senha) {
    console.log("ERRO, a senha nao pode ser seu nome!");
  }
} while (senha == nome);
