// ler o salario de um funcionario, e aplicar um bonus dependendo da quantidade de vendas realizadas por ele, vendas até 1.500,00 bonus de 3 caso passe bonus de 5
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
console.log()
let contador = 1;

while(contador == 1){
    let salario = parseFloat(entrada('Digite o seu salario: R$ '))
    let totalVendas = parseFloat(entrada('Digite o total de vendas que você conseguiu: R$'))
    if(totalVendas>1500){
        salario = salario+(totalVendas*0.05)
    }
    else{
        salario = salario+(totalVendas*0.03)
    }
    console.log('O seu salario ficará : R$' + salario.toFixed(2))
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não'))
}

console.log()
console.log("Obrigado por usar a minha função")
console.log("Até mais :)")