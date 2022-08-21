var entrada = require("readline-sync")
var soma = 0
for(i=0; i<10; i++){
    var idade = parseInt(entrada.question("Qual foi sua nota? "))
    soma = (idade + soma)
} 
console.log("A media de idades é: ", soma / 10)