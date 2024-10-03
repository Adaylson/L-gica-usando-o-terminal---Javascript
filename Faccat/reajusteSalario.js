//informar o salario atual de um funcionario e o valor em porcentagem do reajuste, retornar o salario com reajuste
const entrada = require('prompt-sync')();

console.log('Bem vindo a função do reajuste')
let cont = 1;
while(cont==1){
    let salarioBase = parseInt(entrada('Digite o seu salario atual: '))
    let porcentagem = parseInt(entrada('Digite o valor da porcentagem:'))/100
    let novoSalario = salarioBase*porcentagem+salarioBase
    console.log('Seu novo salario ficou: '+ novoSalario)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    cont = parseInt(entrada("[1]sim [0]não "))
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')