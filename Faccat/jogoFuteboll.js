//ler nome de dois times e quantos gols foi marcado por cada, logo em seguida, retornar o vencedor

const entrada = require('prompt-sync')()

console.log('Bem vindo a partdida de futebolll!!!')
let contador = 1;
console.log()
while(contador == 1){
    let time1 = entrada('Qual o nome do primeiro time: ')
    let gol1 = parseInt(entrada('Digite a quantidade de gols do primeiro time: '))
    console.log()
    let time2 = entrada('Qual o nome do segundo time: ')
    let gol2 = parseInt(entrada('Digite a quantidade de gols do segundo time: '))
    console.log()
    if(gol1 > gol2){
        console.log(`Os ${time1} ganharam dos ${time2} de ${gol1} x ${gol2}`)
    }
    else if(gol1 < gol2){
        console.log(`Os ${time2} ganharam dos ${time2} de ${gol2} x ${gol1}`)
    }
    else{
        console.log('Ambos os times empataram!!')
    }
    console.log()
    console.log('Função finalizada com sucesso! ')
    console.log('Deseja fazer com outros times ?')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')