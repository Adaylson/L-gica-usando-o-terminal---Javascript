//fazer uma função na qual você coloque o nome, valor unitario, e a quantidade total de um produto, e com base na quantidade total, aplicar um desconto
// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%
const entrada = require('prompt-sync')();

console.log("Bem vindo a minha função")
let contador = 1

while(contador == 1){
    let nome = entrada('Digite o nome do produto: ')
    let vlUnitario = parseInt(entrada('Digite o valor unitario do item: '))
    let qtd = parseInt(entrada('Digite a quantidade do item'))

    console.log()
    if(qtd <= 5){
        desconto = 0.02
    }
    else if(qtd > 10){
        desconto = 0.05
    }
    else{
        desconto = 0.03
    }

    console.log(`O Total ficou ${(((vlUnitario * qtd) - (vlUnitario * qtd * desconto)).toFixed(2)).replace(".",",")}`)
    console.log()
    console.log("Deseja atribuir desconto a outro produto ?")
    contador = parseInt(entrada("[1]Sim [0]Não "))
    console.log()
}

console.log("Obrigado por usar a minha função")
console.log("Até mais tarde :)")