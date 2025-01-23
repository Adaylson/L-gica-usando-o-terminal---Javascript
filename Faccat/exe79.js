// Le 20 alunos e suas medias 
// logo em seguida calcular a media da sala
// calcular quantos alunos passaram

function NotasAlunos(notas){
    let passou = 0
    let soma = 0

    for(let i = 0; i < 20; i++){
        if(notas[i]>6){
            passou++
        }
        soma+=notas[i]
    }
    soma/=20

    return`O total de alunos que passou foi: ${passou}, e a sala possui uma media dê: ${soma}`
}

function Iniciar(){
    const entrada = require('prompt-sync')()
    let notas = []

    let contador = 1
    while(contador == 1){
        for(let i = 0; i < 20; i++){
            notas[i] = parseInt(entrada(`Digite a nota do ${i+1}º Aluno: `))  
        }

        console.log(NotasAlunos(notas))
        console.log('Deseja fazer novamente ?')
        console.log('[1]sim [0]não ')
        contador = parseInt(entrada(''))
    }
}

console.log(Iniciar())