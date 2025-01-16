// Ler um limite, e repetir os numeros até ele

const entrada = require('prompt-sync')()

console.log('Bem vindo a minha função')
let contador = 1
console.log()
while(contador == 1){

    let numero = parseInt(entrada('Digite o numero que será o limite: '))
    while(numero<1){
        numero = parseInt(entrada('Valor invalido, não é permitido numeros menores que 1. Digite novamente: '))
    }
    console.log()
    console.log('Gerando os numeros: ')
    for(let i = 1; i <= numero; i++){
        console.log(i)
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    console.log('[1]sim [0]não')
    contador = parseInt(entrada())
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()
