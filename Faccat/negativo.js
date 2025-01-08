//Ler um numero e retornar se ele é positivo ou negativo, sendo zero considerado positivo

let entrada = require('prompt-sync')();

console.log("Bem vindo a minha função :)")
let contador = 1 

while(contador==1){

    console.log()
    let numero = parseInt(entrada('Digite o numero: '))
    console.log()

    if(numero>=0){
        console.log("É um numero positivo")
    }
    else{
        console.log("É um numero negativo")
    }

    console.log()
    console.log("Função finalizada com sucesso!")
    console.log("Deseja verificar mais algum numero?")
    contador = parseInt(entrada("[1]Sim [0]Não "))
    console.log()
}
console.log("Obrigado por usar a minha função")
console.log("Até mais tarde :) ")