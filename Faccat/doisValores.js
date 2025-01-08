//ler dois valores e fazer as validações

const entrada = require('prompt-sync')()
console.log('Bem vindo a minha função')
let contador = 1
console.log()
while(contador == 1){
    let n1 = parseInt(entrada('Digite o primeiro numero: '))
    let n2 = parseInt(entrada('Digite o segundo numero: '))
    console.log()
    if(n1 == n2){
        console.log('Os dois numeros são iguais')
    }
    else if(n1>n2){
        console.log('O primeiro é maior que o segundo')
    }
    else{
        console.log('O segundo é maior que o primeiro')
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    console.log('[1]sim [0]não')
    contador = parseInt(entrada())
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')