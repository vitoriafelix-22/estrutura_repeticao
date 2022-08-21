var entrada = require("readline-sync");
var numeroSecreto = 10;
do {
  var question = parseInt(entrada.question("Me diga um numero: "));
  if (question == numeroSecreto){
    console.log("Parabéns, voce acertou!")
  }else if(question < numeroSecreto){
    console.log("Ainda não! Escolha um numero maior.")
  }else{
    console.log("Ainda nao. Escolha um numero menor")
  }
  
  }while(question != numeroSecreto)