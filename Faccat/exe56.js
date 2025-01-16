//fazer a tabuada de um numero escolhido

const entrada = require('prompt-sync')()

let contador = 1
console.log('Bem vindo a minha função')
console.log()
while(contador == 1){
    let tabuada = parseInt(entrada('Digite o numero que você deseja que seja gerada a tabuada: '))
    console.log()
    console.log('Gerando a tabuada....')
    for(let i = 1 ; i <= 10; i++){
        console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()

