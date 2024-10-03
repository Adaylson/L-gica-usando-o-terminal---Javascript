//verificar se um numero é maior que 10
const entrada = require('prompt-sync')();

console.log('Bem vindo a função do 10')
let cont = 1;
while(cont == 1){
    let numero = parseInt(entrada('Digite um numero: '))

    if(numero == 10){
        console.log('é dez')
    } 
    else if(numero>10){
        console.log('Maior que 10')
    }
    else{
        console.log('Menor que 10')
    }

    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    cont = parseInt(entrada('[1]sim [0]não '))
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')