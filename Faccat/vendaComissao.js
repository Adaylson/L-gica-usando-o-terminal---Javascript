//Calcular o salario fixo, comissão fixa pelo numeros de carros que ele vendeu, e mais 5% do total dos carros por ele vendido
const entrada = require('prompt-sync')();

console.log('Bem vindo a função do salario por comissão')
let cont = 1;
while(cont == 1){
    let salarioFixo = parseInt(entrada('Digite o seu salario base: R$'))
    let valorPorCarro = parseInt(entrada('Digite quantos você ganha por carro vendido: R$'))
    let qtdCarrosVendidos = parseInt(entrada('Digite quantos carros você vendeu: '))
    let totalVendas = parseInt(entrada('Qual foi o total de suas vendas: R$'))

    let salarioTotal = salarioFixo + valorPorCarro*qtdCarrosVendidos + totalVendas*0.05

    console.log('O seu salario final ficará: R$' + salarioTotal.toFixed(2))
    console.log()
    console.log('Obrigado por usar a minha função')
    console.log('Deseja fazer novamente ?')
    cont = parseInt(entrada('[1]sim [0]não '))
}
console.log("Obrigado por usar a minha função")
console.log('Até mais tarde :)')