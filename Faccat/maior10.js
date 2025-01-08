//Ler um valor e verificar se o mesmo é maior que 10


let entrada = require('prompt-sync')()
console.log("Bem vindo a minha função")
let contador = 1;

while(contador == 1){
    console.log()
    let numero = parseInt(entrada("Digite um valor: "))
    console.log()

    if(numero > 10) {
        console.log("Esse numero é maior que 10")
    }
    else{
        console.log("Esse numero, não é maior que 10")
    }
    console.log()
    console.log("Função finalizada com sucesso! ")
    console.log("Deseja fazer com outro numero? ")
    contador = parseInt(entrada("[1]Sim [0]Não "))
    console.log()
}
console.log("Obrigado por usar a minha função")
console.log("Até mais tarde :)")
