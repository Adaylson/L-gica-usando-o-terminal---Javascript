//ler a nota de duas avaliações de um aluno, sendo aceitos apenas numeros de 0 ate 10

const entrada = require('prompt-sync')()

let contador = 1
console.log('Bem vindo a minha função')
console.log()
while(contador == 1){

    let a1 = parseInt(entrada('Digite a nota da primeira avaliação: '))
    while(a1<0&&a1>10){
        console.log('Valores invalidos, por favor digite a nota novamente: ')
        a1 = parseInt(entrada())
    }
    let a2 = parseInt(entrada('Digite a nota da segunda avaliação: '))
    while(a2<0&&a2>10){
        console.log('Valores invalidos, por favor digite a nota novamente: ')
        a2 = parseInt(entrada())
    }
    console.log()
    console.log(`A media final do aluno ficou: ${(a1+a2)/2}`)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log('Obrigado por usar a minha função ')
console.log('Até mais tarde :)')