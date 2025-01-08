//ler a hora de inicio e de fim de um jogo de xadrez, sendo 24h o limite de tempo, e podendo começar em um dia e terminar em outro

console.log('Bem vindo a minha função :)')
const entrada = require('prompt-sync')();
console.log()
let contador = 1 
while(contador == 1){
    let inicio = parseInt(entrada('Digite o horario de inicio do jogo: '))
    let fim = parseInt(entrada('Digite o termino do jogo: '))
    if(fim > inicio){
        tempoJogo = fim - inicio
    }
    else{
        tempoJogo = (24 - inicio) + fim
    }
    while(tempoJogo > 24 || tempoJogo < 0){
        console.log()
        fim = parseInt(entrada('O tempo de jogo não pode passar de 24h, ou ser um numero negativo, digite novamente o horario de termino: '))
        if(fim > inicio){
            tempoJogo = fim - inicio
        }
        else{
            tempoJogo = (24-inicio) + fim
        }
    }
    console.log()
    console.log(`O tempo de jogo total ficou: ${tempoJogo}H`)
    console.log()
    console.log('Função finalizada')
    console.log('Deseja fazer novamente?')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log("Até mais tarde :)")