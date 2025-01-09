//Ler a idade de o tempo de trabalho, e retornar se o funcionario está habito a se aposentar ou não

const entrada = require('prompt-sync')()
let contador = 1;
console.log('Bem vindo a função da aposentadoria ')
console.log()
while(contador==1){
    let idade = parseInt(entrada('Digite a sua idade: '))
    let contribuicao = parseInt(entrada('Digite quanto tempo você teve de contribuição: '))

    console.log()
    if(idade>=65){
        console.log('Pode se aposentar! ')
    }
    else if(contribuicao >= 30){
        console.log('Pode se aposentar')
    }
    else if(contribuicao >= 25 && idade >= 60){
        console.log('Pode se aposentar! ')
    }
    else{
        console.log('Não pode se aposentar :(')
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente?')
    contador = parseInt(entrada('[1]sim [0]não '))
    console.log()
}
console.log('Obrigado por usar a minha função :)')
console.log('Até mais tarde :)')