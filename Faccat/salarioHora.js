//Ler a quantidade de horas trabalhadas por semana, caso as horas passe de 40, o funcionario recebe 50% a mais no pagamento 
const entrada = require('prompt-sync')();

console.log('Bem vindo a função das horas trabalhadas')
let contador = 1;
while(contador == 1){
    let salario = parseInt(entrada('Digite quantos o funcionario ganha por hora: R$ '))
    while(salario < 0){
        salario = parseInt(entrada('Valor, invalido digite novamente: '))
    }
    let total = 0
    for(let semana = 1; semana != 5; semana++){
        let horasTrabalhadas = parseInt(entrada('Digite quantas horas de trabalho você teve na '+ semana +'° semana: '))
        while(horasTrabalhadas<0||horasTrabalhadas>720){
            horasTrabalhadas = parseInt(entrada('Horas invalida, digite novamente: '))
        }
        if(horasTrabalhadas>40){
            total += (((horasTrabalhadas-(horasTrabalhadas-40))*salario)+salario*2*(horasTrabalhadas-40))
        }
        else{
            total += horasTrabalhadas*salario
        } 
    }
    console.log()
    console.log('O total do horas trabalhadas foi: R$',total.toFixed(2))
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não '))
}
console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais :)')