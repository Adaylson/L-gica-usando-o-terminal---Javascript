const entrada = require('prompt-sync')();

// Informar um numero e retornar o seu antecessor

console.log("Bem vindo a minha função")
let a = parseInt(entrada("Digite um numero: "))
let antecessor = a-1
let sucessor = a+1
console.log("O antecessor de "+ a+ " é "+antecessor+" e seu sucessor é: "+sucessor)
console.log("Obrigado por usar a minha função")
console.log("Até mais tarde :)")