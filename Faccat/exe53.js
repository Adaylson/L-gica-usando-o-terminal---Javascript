//ler um numero e escrever do 1 ate ele, não sendo considerado numeros negativos

const entrada = require('prompt-sync')()
console.log('Bem vindo a minha função ')
let contador = 1
console.log()

while(contador == 1){
    
    let limite = parseInt(entrada('Digite até onde você quer que seja gerado: '))
    console.log()
    console.log('Gerando numeros....')
    console.log()
    for(let i = 1; i <= limite; i++){
        console.log(i)
    }
    console.log()
    console.log('Função finalizada com')
}