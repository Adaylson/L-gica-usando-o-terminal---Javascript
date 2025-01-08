//ler o salario de um vendendor e o total de vendas, sendo 3% para menos de 1500,00 e 5% passando esse valor
const entrada = require('prompt-sync')()

console.log('Bem vindo a minha função ')
let contador = 1;
console.log()
while(contador == 1){
    let salario = parseInt(entrada('Digite o seu salario: '))
    let vendas = parseInt(entrada('Digite o total de vendas: '))

    let comissao = 0.03
    if(vendas > 1499){
        comissao = 0.05
    }

    console.log()
    console.log(`O seu salario final ficou : R$${(salario + (vendas*comissao)).toFixed(2).replace('.',',')}`)
    console.log()
    console.log('função finalizada com sucesso! ')
    console.log('Deseja fazer com outra pessoa ?')
    contador = parseInt(entrada('[1]sim [0]não'))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')