//ler dois numeros e verificar se eles podem ser maior ou menor que o valor lido inicialmente

const entrada = require('prompt-sync')()
let contador = 1 
console.log('Bem vindo a minnha função')
console.log()
while(contador == 1){
    let soma = 0
    let valorInicial = 0
    for(let i = 1; i < 3; i++){
        let numero = parseInt(entrada(`Digite o valor ${i}:`))
        if(i == 1){
            valorInicial = numero
        }
        else{
            soma = valorInicial + numero
        }
        console.log()
    }
    console.log(`A soma final ficou: ${soma}`)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()