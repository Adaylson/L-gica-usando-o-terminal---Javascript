//Ler o nome e quantidade de gols de dois times, e retornar quem ganhou a partida
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função');
let contador = 1;

while(contador == 1){
    let time1 = entrada('Digite o nome do primeiro time: ')
    let gols1 = parseInt(entrada('Digite a quantidade gols por ele marcada: '));
    console.log()
    let time2 = entrada('Digite o nome do segundo time: ')
    let gols2 = parseInt(entrada('Digite a quantidade de gols por ele marcada: '))
    console.log()
    
    if(gols1>gols2){
        console.log('Os '+time1+' Ganharam de', gols1,'x',gols2,)
    }
    else if(gols2>gols1){
        console.log('Os', time2, 'Ganharam de', gols2,'x',gols1)
    }
    else{
        console.log('EMPATE')
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente? ')
    contador = parseInt(entrada('[1]sim [0]não '))
    console.log()
}
console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
