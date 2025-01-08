//Ler o nome de um produto, o valor unitario, e a quantidade total, logo em seguida aplicar uma quantidade de desconto pelo valor do produto

const entrada = require('prompt-sync')()
console.log("Bem vindo a função do produto")

let contador = 1

while(contador == 1){
    let nomeProduto = entrada("Digite o nome do produto: ")
    let vlUnitario = parseInt(entrada("Qual o valor unitario do produto: "))
    let qtdTotal = parseInt(entrada("Digite a quantidade de unidades deste produto: "))

    console.log("Deseja aplicar desconto?")
    let escolha = parseInt(entrada("[1]sim [0]não "))

    if(escolha == 1){
        desconto = (parseInt(entrada("Quantos de desconto você irá querer: ")))
    }
    else{
        desconto = 0
    }

    console.log()
    console.log(`O total ficou: R$${(( (vlUnitario * qtdTotal) - (vlUnitario * qtdTotal * (desconto/100))).toFixed(2)).replace(".", ",")}`)
    console.log()
    console.log('Deseja fazer a conta de outro produto ?')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log("Obrigado por usar a minha função")
console.log("Até mais tarde :)")