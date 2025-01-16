//fazer a tabuada do numero 8

const entrada = require('prompt-sync')()
let contador = 1
console.log('Bem vindo a minha função')
console.log()
while(contador == 1){
    console.log('Gerando tabuada: ')
    for(let i = 1; i <= 10; i++){
        console.log(`${i} x 8 = ${i*8}`)
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    console.log('[1]sim [0]Não')
    contador = parseInt(entrada())
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()