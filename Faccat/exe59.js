//ler 10 valores, e indentificar quantos destes valores são negativos 

console.log('Bem vindo a minha função')
const entrada = require('prompt-sync')()
let contador = 1
console.log()
while(contador == 1){
    let negativo = 0
    for(let i = 1;i <= 10; i++){
        let numero = parseInt(entrada(`Digite o ${i}° numero: `))
        console.log()
        if(numero < 0){
            negativo++
        } 
    }
    console.log(`O total de numeros negativos foi: ${negativo}`)
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