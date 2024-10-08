//ler um numero e informar se o mesmo é positivo, negativo ou zero
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let contador = 1;

while(contador==1){
    let numero = parseInt(entrada('Digite o numero: '))

    if(numero==0){
        console.log('é zero')
    }
    else if(numero>0){
        console.log('É positivo')
    }
    else{
        console.log('É negativo')
    }

    console.log()
    console.log('Obrigado por usar a minha função')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não'))
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')