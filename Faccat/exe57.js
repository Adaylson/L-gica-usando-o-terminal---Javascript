// fazer do 1 ate 10 usando o do while
const entrada = require('prompt-sync')()
let contador = 1 
console.log('Bem vindo a minha função')
console.log()
while(contador == 1){

    console.log('Gerando sequencia...')
    console.log()
    let i = 0

    do{
        i += 1
        console.log(i)
    } while(i <= 9)

    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não'))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()