//Simular um banco 

console.log('Bem vindo ao banco Asento')

const entrada = require('prompt-sync')()
let contador = 1
console.log()

let saldo = 1500.00
console.log('Digite o numero da sua conta: ')
let numero = entrada()
while(contador == 1){
    console.log()
    console.log(`Bem vindos a conta N°${numero}`)

    console.log('Digite o que você deseja fazer :')
    console.log('[1]Consultar saldo')
    console.log('[2]Depositar dinheiro')
    console.log('[3]Sacar')
    console.log('[4]sair')
    let escolha = parseInt(entrada())
    console.log()

    if(escolha == 1){
        console.log(`Seu saldo está: R$${saldo.toFixed(2).replace('.',',')}`)

    }
    else if(escolha == 2){
        console.log(`Quantos você deseja depositar: `)
        let deposito = parseInt(entrada())
        saldo += deposito
        console.log(`Seu saldo ficou: R$${saldo.toFixed(2).replace('.',',')}`)
    }
    else if(escolha == 3){
        console.log(`Seu saldo está: R$${saldo.toFixed(2).replace('.',',')}`)
        console.log('Quantos você deseja retirar de seu saldo?')
        let saque = parseInt(entrada())
        saldo -= saque
        console.log(`Seu saldo ficou: R$${saldo.toFixed(2).replace('.',',')}`)
    }
    else{
        console.log('Função finalizada com sucesso! ')
        console.log('Deseja fazer a nossa função novamente ?')
        contador = parseInt(entrada('[1]sim [0]não'))
    }
}
console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :) ')