//ler o numero de alunos existentes em uma turma e apos isso calcular a media total dessa sala

let contador = 1
const entrada = require('prompt-sync')()
console.log('Bem vindo a minha função')
console.log('')
while(contador == 1){
    let alunos = parseInt(entrada('Digite quantos alunos tem em sua sala: '))
    let media = 0
    let i = 0
    for(i; i < alunos; i++){
        let nota = parseInt(entrada(`Digite a nota do ${i+1}º Aluno: `))
        console.log()
        media += nota 
        console.log()
    }
    console.log(`A media total ficou: ${media/i}`)
    console.log()
    console.log('Função finalizada com sucesso! ')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]Sim [0]Não'))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()