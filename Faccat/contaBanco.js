//ler o numero da conta, saldo, debito e credito de um criente, logo em seguinda exibir a sua situação
const entrada = require('prompt-sync')();

function consultar(){
    console.log('O seu saldo atual é: R$'+saldo.toFixed(2));

    if(saldo>0){
        console.log('positivo')
    }
    else{
        console.log('negativo')
    }

    let enter = entrada('precione enter para continuar');
    conta();
}

function depositar(){
    let deposito = parseFloat(entrada('Quantos você vai querer depositar: R$'))
    saldo+=deposito
    console.log('Seu saldo ficou: R$'+ saldo.toFixed(2))
    let enter = entrada('precione enter para continuar');
    conta;
}

function sacar(){
    let saque = parseFloat(entrada('Quantos você vai quere sacar: R$'))
    while(saque>saldo){
        saque = parseFloat(entrada('Valor de saque maior do que tem na conta, digite novamente o valor do saque:'))
    }
    saldo-=saque
    console.log('O seu saldo ficou: R$'+ saque.toFixed(2))
    conta();
}

function conta(){
    console.log('Bem vindo a conta '+ numeroConta)
    console.log('O que você deseja fazer ?')
    let escolha = entrada("[1]Consultar o seu saldo atual [2]Depositar em sua conta [3]Sacar de sua conta [4]sair")
    switch (escolha){
        case '1':
            consultar();
            break
        case '2':
            depositar();
            break
        case '3':
            sacar();
            break
        default:
            console.log('Obrigado por escolher nosso banco, até mais :)');
            break
    }
}

console.log('Bem vindo a minha função')

let numeroConta = entrada('Digite o numero da sua conta: ');
let saldo = parseFloat(entrada('Digite o seu saldo atual: R$'));
conta()
    
