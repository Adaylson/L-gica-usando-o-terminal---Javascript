//verificar se um valor é positivo ou negativo
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let cont = 1
while(cont == 1){
    let valor = parseInt(entrada('Digite um valor: '))

    if(valor>-1){
        console.log('é um numero positivo')
    }
    else{
        console.log('é um numero negativo')
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente?')
    cont = parseInt(entrada('[1]sim [0]não '))
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')