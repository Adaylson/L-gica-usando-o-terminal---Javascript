// escrever do 10 ao 1 usado o do while

const entrada = require('prompt-sync')()
let contador = 1
console.log('Bemvindo a minha função')
console.log()
while(contador == 1){
    console.log('Gerando sequencia...')
    console.log()
    let i = 10
    do{
        console.log(i)
        i -= 1
    } while(i > 0)
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