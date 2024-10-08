//calcular o tempo de uma partida de xadrez considerando que uma partida não pode passar de 24 horas
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let contador = 1 
while(contador==1){
    let inicio = parseInt(entrada('Digite a hora de inicio da partida: '))
    while(inicio>24||inicio<0){
        inicio = parseInt(entrada('Valor invalido, digite novamente: '))
    }
    let fim = parseInt(entrada('Digite a hora de termino da mesma: '))
    while(fim>24||fim<0){
        fim = parseInt(entrada('Valor invalido, digite novamente: '))
    }

    let tempoJogo = 0;

    if(inicio==fim){
        tempoJogo = 0
    }
    else if(inicio>fim){
        tempoJogo = (24 - inicio) + fim
    }
    else{
        tempoJogo = fim - inicio
    }
    
    console.log()
    console.log('O tempo de jogo foi: '+ tempoJogo + "H")
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente?')
    contador = parseInt(entrada("[1]sim [0]não "))
}
console.log()
console.log("Obrigado por usar a minha função")
console.log('Até mais tarde :)')