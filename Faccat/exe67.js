//fazer a media do 15 até o 100
const entrada = require('prompt-sync')()

let contador = 1
console.log( 'Bem vindo a minha função')
console.log()
while(contador == 1){
    let posicao = 0
    let soma = 0
    console.log('Gerando media: ')
    for(let i = 15; i < 101; i++){
        soma += i
        posicao ++
    }
    let media = soma/posicao

    console.log(`A media final ficou : ${media/posicao}`)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não'))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()