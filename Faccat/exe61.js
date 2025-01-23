//ler 10 valores e calcular a media 

let contador = 1
const entrada = require('prompt-sync')()
console.log('Bem vindo a minha função')
console.log()
while(contador == 1){
    let total = 0
    for(let i = 1; i <= 10; i++){
        let numero = parseInt(entrada(`Digite o ${i}º valor: `))
        console.log()
        total += numero
    }
    console.log(`A media total ficou: ${total}`)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    console.log('[1]sim [0]não')
    contador = parseInt(entrada(''))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()