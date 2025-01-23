//ler 2 valores,  calcular e escrever a soma dos valores lidos 

const entrada = require('prompt-sync')()
let contador = 1
console.log('Bem vindo a minha função')
console.log()
while(contador == 1){
    let numeroant = 0
    let soma = 0
    for(let i = 1; i < 3; i++){
        let numero = parseInt(entrada('Digite o valor do numero: ' ))
        if(i == 1){
            numeroant = numero
        }
        else{
            while(numeroant > numero){
                numero = parseInt(entrada('Não é o valor ser menor que o valor anterior, digite novamente: '))
                console.log()       
            }
        }
        numeroant = numero
        soma += numero
    }
    console.log(`A soma final ficou ${soma}`)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não'))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :) ')
console.log()