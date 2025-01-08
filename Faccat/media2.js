//ler duas notas de um aluno e retornar se o mesmo está aprovado ou reprovado, sendo superior a 6 aprovado

const entrada = require('prompt-sync')()

console.log("Bem vindo a função da media :)")
let contador = 1;

while(contador == 1){

    console.log()
    let n1 = parseInt(entrada('Digite a primeira nota: '))
    let n2 = parseInt(entrada('Digite a segunda nota: '))
    console.log()
    let media = (n1+n2)/2

    if(media>6){
        console.log("O aluno foi APROVADO!!!")
    }
    else{
        console.log("O aluno foi REPROVADO!!")
    }
    console.log()
    console.log("Obrigado por usar a minha função")
    console.log("Deseja verificar outro aluno")
    contador = parseInt(entrada("[1]Sim [0]Não "))
    console.log()
}
console.log("Obrigado por usar a minha função")
console.log("Até mais tarde :")