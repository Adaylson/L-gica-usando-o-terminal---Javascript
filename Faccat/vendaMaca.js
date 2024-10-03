//calcular quantas maças a pessoa vai comprar, e com base nisso aplicar o desconto: ate 11 maças 1,30 de 12 maças 1,00
const entrada = require('prompt-sync')();

let cont = 1;
console.log('Bem vindo a minha função')
while(cont==1){
    let qtdm = parseInt(entrada('Digite quantas maças você vai levar: '))

    if(qtdm>11){
        qtdm=qtdm*1
    }
    else{
        qtdm=qtdm*1.3
    }

    console.log('Você pagará: R$'+ qtdm.toFixed(2))
    console.log()
    console.log('Função finalzida com sucesso!')
    console.log('Deseja fazer novamente?')
    cont = parseInt(entrada('[1]sim [0]não '))
}

console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')