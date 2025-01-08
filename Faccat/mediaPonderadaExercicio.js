//fazer uma nota poderada
//                                 N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
// Média_de_Aproveitamento = ---------------------------------------------------------
//                                                  7
//Logo em seguida retonar a situção do mesmo

let entrada = require('prompt-sync')();

console.log("Bem vindo a minha função")
let contador = 1;

while(contador == 1){
    let n1 = parseInt(entrada("Digite a nota 1: "))
    let n2 = parseInt(entrada("Digite a nota 2: "))
    let n3 = parseInt(entrada("Digite a nota 3: "))
    let exercicios = parseInt(entrada('Digite a media dos exercicios: '))
    console.log()

    let media = (n1 + n2*2 + n3*3 + exercicios)/7
    
    if(media >= 9){
        resposta = 'A'
    }
    else if(media >= 7.5){
        resposta = 'B'
    }
    else if(media > 6){
        resposta = "C"
    }
    else if(media < 6){ 
        resposta = "D"
    }
    else{
        console.log("Valor invalido")
    }

    console.log(`O Conceito ficou ${resposta}`)
    console.log()
    console.log("Função finalizada com sucesso!")
    console.log("Deseja fazer a verificação de outro aluno ?")
    contador = parseInt(entrada("[1]Sim [0]Não "))
    console.log()
}
console.log("Obrigado por usar a minha função")
console.log("Até mais tarde :)")