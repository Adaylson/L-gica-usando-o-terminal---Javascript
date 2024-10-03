//Converter Fahrenheits para celsius
const entrada = require('prompt-sync')();

console.log('Bem vindo ao conversor de temperaturas')
let cont = 1;
while(cont == 1){
    let f = parseFloat(entrada('Digite o valor em Fahrenehits: '))

    let c = ((f-32)*5)/9

    console.log(f + '°F = ' + c + '°C')
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente?')
    cont = parseInt(entrada('[1]sim [0]não '))
}

console.log('obrigado por usar a minha função')
console.log('Até mais tarde :)')