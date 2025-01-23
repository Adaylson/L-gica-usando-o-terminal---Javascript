// ler 10 valores e retornar quantos estão dentro do intervalo de 10 a 20 

console.log('Bem vindo a minha função')
let contador = 1
const entrada = require('prompt-sync')()
console.log()
while(contador == 1){

    let intervalo = 0
    for(let i = 1; i < 11; i++){
        let numero = parseInt(entrada(`Digite o ${i}º valor: `))
        console.log()
        
        if(numero < 21 && numero > 9){
            intervalo++
        }
    }
    console.log(`O total de numeros dentro do intervalo são: ${intervalo}`)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer com outros numeros? ')
    console.log('[1]Sim [0]Não')
    contador = parseInt(entrada(''))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')