//ralizar uma função de venda, dependendo do produto e quantidade comprador aplicar ou não o desconto, e exibir o valor
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let contador = 1;
while(contador == 1){
    let totalPeso = 0
    let total = 0

        while(contador == 1){
        console.log('O que vai querer compara: ')
        let escolha = parseInt(entrada('[1]morango [2]maça: '))
        while(escolha != 1 &&  escolha != 2){
            escolha = parseInt(entrada('valor invalido, apenas [1]morango [2]maça, digite novamente: '))
        }
        console.log()
        let peso = parseFloat(entrada('Quantos quilos você vai querer: '))

        if(escolha==1&&peso>5){
            total += 2.20*peso 
        }
        else if(escolha==1&&peso<5){
            total += 2.50*peso
        }
        else if(escolha==2&&peso>5){
            total += 1.50*peso
        }
        else{
            total += 1.80*peso
        }
        totalPeso+=peso
        console.log('Deseja adicionar mais coisas no carrinho: ')
        contador = parseInt(entrada('[1]sim [0]não '))
    }
    contador = 1;
    if(totalPeso > 8 || total > 25){
        total+=(total*0.1) 
    }
    console.log()
    console.log('Você irá pagar R$', total)
    console.log()
    console.log('Obrigado por usar a minha função')
    console.log('Deseja executar novamente: ')
    console.log('[1]sim [0]não ')
    contador = parseInt(entrada())
}
console.log()
console.log('Até mais tarde :)')