//ler o ano de nascimento de uma pessoa, e retornar se ela pode votar ou não
const entrada = require('prompt-sync')();

let cont = 1;
console.log('Bem vindo a minha função')
while(cont==1){
    let ano = parseInt(entrada('Digite seu ano de nascimento: '))

    if((2024-ano)<16){
        console.log('Não pode votar')
    }
    else{
        console.log('Pode votar')
    }
    entrada()
    console.log()
    console.log('Obrigado por usar a minha função')
    console.log('Deseja fazer novamente?')
    cont = parseInt(entrada('[1]sim [0]não '))
}
console.log()
console.log('Até mais :)')
console.log()