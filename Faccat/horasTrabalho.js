//Ler as horas trabalhadas de um funcionario durante um mes, e caso passe 160 horas por mes, ele receberá horas extras.

const entrada = require('prompt-sync')()
console.log('Bem vindo a função')
let contador = 1;
console.log()

while(contador == 1){
    let salarioHora = parseInt(entrada('Digite o salario por hora de um funcionario: '))
    let horasMes = parseInt(entrada('Digite as horas trabalhadas durante um mes: '))

    let salarioTotal = 0;
    if(horasMes>160){
        salarioTotal = (salarioHora * 160) + ((horasMes-160)*salarioHora*2)
    }
    else{
        salarioTotal = salarioHora * horasMes
    }
    console.log()
    console.log(`O salario final desse funcionario ficou: R$${salarioTotal.toFixed(2).replace('.',',')}`)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer a conta com outro funcionario ?')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')