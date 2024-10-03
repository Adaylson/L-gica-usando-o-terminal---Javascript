//calcular duas notas, e exibir a situação do aluno
const entrada = require('prompt-sync')();

let cont = 1;
console.log('Bem vindo a minha função')
while(cont==1){
    let a = parseInt(entrada('Digite a primeira nota: '))
    while(a<0|a>10){
        a = parseInt(entrada('Nota invalida, digite novamente: '))
    }
    
    let b = parseInt(entrada('Digite a segunda nota: '))
    while(b<0|b>10){
        b = parseInt(entrada('Nota invalida, digite novamente: '))
    }

    let media = (a+b)/2
    if(media>6){
        console.log('O aluno está aprovado com '+ media.toFixed(1))
    }
    else{
        console.log('O aluno está reprovado com '+ media.toFixed(1))
    }
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente?')
    cont = parseInt(entrada('[1]sim [0]não '))
}
console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')