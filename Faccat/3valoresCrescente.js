//ler 3 valores e retorna-lo em ordem crescente
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')

let contador = 1;
while(contador == 1){
    let numero1 = parseInt(entrada('Digite o primeiro numero: '))
    let numero2 = parseInt(entrada('Digite o segundo numero: '))
    while(numero1 == numero2){
        numero2 = parseInt(entrada('Não são permitidos valores iguais, digite novamente o segundo valor: '))
    }
    let numero3 = parseInt(entrada('Digite o terceiro valor'))
    while(numero3 == numero2 || numero3 == numero1){
        numero3 = parseInt(entrada('Não são permitidos valores iguais, digite novamente o terceiro valor: '))
    }
    console.log()
    if(numero1>numero2){
        if(numero2>numero3){
            console.log(numero3 + " " + numero2 + " " + numero1)
        }
        else{
            if(numero1>numero3){
                console.log(numero2 + " " + numero3 + " " + numero1)
            }
            else{
                console.log(numero2 + " " + numero1 + " " + numero3)
            }
        }
    }
    else{
        if(numero1>numero3){
            console.log(numero3 + " " + numero1 + " " + numero2)
        }
        else{
            if(numero2>numero3){
                console.log(numero1 + " " + numero3 + " " + numero2)
            }
            else{
                console.log(numero1 + " " + numero2 + " " + numero3)
            }
        }
    }
    console.log('Obrigado por usar a minha função')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não '))
}
console.log()
console.log('Obrigado por ter usado a minha função')
console.log('Até mais :)')