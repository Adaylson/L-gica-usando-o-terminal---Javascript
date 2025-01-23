//ler 10 numeros e todos que forem acima de 40 devem ser somados 

const entrada = require('prompt-sync')()
let contador = 1
console.log('Bem vindo a minha função')
console.log()
while(contador == 1){
    let soma = 0
    for(let i = 1; i < 11; i++){
        let numero = parseInt(entrada(`Digite o ${i}ª numero: `))

        if(numero > 40){
            soma += numero
            console.log()
        }
    }
        console.log(`O total ficou: ${soma}`)
        console.log()
        console.log('Função finalizada com sucesso!')
        console.log('Deseja fazer novamente ?')
        contador = parseInt(entrada('[1]sim [0]não'))
        console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()
