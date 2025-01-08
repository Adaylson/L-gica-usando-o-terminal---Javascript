//ler um valor e colocar se ele é positivo, negativo ou zero 

const entrada = require('prompt-sync')()
let contador = 1
console.log('Bem vindo a minha função')
console.log()
while(contador==1){
    let numero = parseInt(entrada('Digite o numero: '))

    if(numero>0){
        console.log('É um numero positivo')
    }
    else if(numero<0){
        console.log('É um numero negativo')
    }
    else{
        console.log('É zero')
    }

    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')