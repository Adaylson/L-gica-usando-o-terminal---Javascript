const entrada = require('prompt-sync')();

//Essa função vai calcular a area de um retangulo, com base na altura e largura informadas pelo usuario

console.log("Bem vindo a minha função")
let a = 1
while(a == 1){
    let base = parseInt(entrada("Digite a base do retangulo:"))
    let altura = parseInt(entrada("Digite a altura do retangulo: "))
    let p = base*2+altura*2
    console.log("A area total do retangulo deu: "+ base*altura+" e seu perimetro total deu: "+ p)
    console.log("Função finalizada com sucesso!")
    console.log("Deseja fazer novamente ?")
    a = parseInt(entrada("[1]sim [0]não: "))
}
console.log("Obrigado por usar a minha função")
console.log("Até mais :)")