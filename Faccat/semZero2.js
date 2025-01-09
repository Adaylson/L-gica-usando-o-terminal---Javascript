//mesma coisa  que o exercicio anterios, só que usando o do while
const entrada = require('prompt-sync')()
console.log('Bem vindo a minha função')
let contador = 1 
console.log()
do{
    let n1 = parseInt(entrada('Digite o primeiro numero: '))
    let n2 = 0
    do{
        n2 = parseInt(entrada('Digite o segundo numero: '))
    } while(n2 == 0)
    console.log()
    console.log(`O resultado da conta ficou: ${n1/n2}`)
    console.log()
    console.log('Função finalizada com sucesso! ')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}while(contador==1)
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')