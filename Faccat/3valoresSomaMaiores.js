//ler 3 valores e somar os dois maiores
const entrada = require('prompt-sync')();

console.log("Bem vindo a minha função")
let contador = 1;

while(contador == 1){
    let numero1 = parseInt(entrada('Digite o primeiro valor: '))
    let numero2 = parseInt(entrada('Digite o segundo valor: '))
    while(numero1 == numero2){
        numero2 = parseInt(entrada('Não é permitido valores iguais, digite novamente'))
    }
    let numero3 = parseInt(entrada('Digite o terceiro numero: '))
    while(numero3 == numero1 || numero3 == numero2){
        numero3 = parseInt(entrada('Valor invalido, digite novemente: '))
    }

    let soma = 0;

    console.log()
    if(numero3<numero1&&numero3<numero2){
        soma = numero1+numero2
    }
    else if(numero2<numero1&&numero2<numero3){
        soma = numero1+numero3
    }
    else{
        soma = numero3+numero2
    }
    console.log('A soma dos maiores ficou: '+ soma)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente?')
    contador = parseInt(entrada('[1]sim [0]não '))
}
console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()