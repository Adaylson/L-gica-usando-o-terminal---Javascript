// ler 10 numeros e no final exibir a soma dos mesmos 

const entrada = require('prompt-sync')()
let contador = 1
console.log('Bem vindo a minha função')
console.log()
while(contador == 1){
    let soma = 0
    for(let i = 1; i < 11; i++){
        let numero = parseInt(entrada('Digite o numero: '))
        console.log()
        soma += numero   
    }
    console.log(`O total ficou: ${soma}`)
    console.log()
    comsole.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novente ?')
    contador = parseInt(entrada('[1]sim [0]não'))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()
