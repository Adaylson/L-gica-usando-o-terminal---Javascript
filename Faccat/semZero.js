//ler dois valores, e caso o segundo valor for zero, repetir, até que chegue em um valor que não for zero, ao final apresentar o resultado da divisão
const entrada = require('prompt-sync')()
console.log('Bem vindo a minha função')
let contador = 1
console.log()
while(contador == 1){
    let n1 = parseInt(entrada('Digite um numero: '))
    let n2 = parseInt(entrada('Digite o segundo numero: '))
    while(n2 == 0){
        n2 = parseInt(entrada('Não é permitido zero, por favor digite outro numero: '))
    }
    console.log()
    console.log(`O resultado da divisão ficou: ${n1/n2}`)
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]Sim [0]Não'))
    console.log()
}
console.log('Obrigado por ter usado a minha função')
console.log('Até mais tarde :)')