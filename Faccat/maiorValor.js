//ler dois valores e retornar o maior entre eles 
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let contador = 1 
while(contador == 1){
    let n1 = parseInt(entrada('Digite um numero: '))
    let n2 = parseInt(entrada('Digite o segundo numero: '))
    while(n2==n1){
        n2 = parseInt(entrada('Não é permitido valores iguais, digite o segundo valor novamente: '))
    }

    if(n1>n2){
        console.log('O maior numero é: ')
        console.log(n1)
    }
    else{
        console.log('O maior numero é: ')
        console.log(n2)
    }

    console.log('Função finalizada com sucesso!')
    console.log("Deseja fazer novamente?")
    cont = parseInt(entrada('[1]sim [0]não: '))
}

console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()