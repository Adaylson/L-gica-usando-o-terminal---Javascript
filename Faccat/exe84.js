// ler um numero que será o tamanho do Array, em seguida criar dois arrays e somalos em um terceiro 

console.log('Bem vindo a minha função')
const entrada = require('prompt-sync')()
let contador = 1
console.log()
while(contador == 1){
    let A = []
    let B = []
    let C = []

    let tamanhoArray = parseInt(entrada('Digite o tamanho dos arrays a serem criados: '))

    for(let i = 1; i <= 3; i++){
        for(let j = 0; j < tamanhoArray; j++){
            if(i == 1){
                A[j] = parseInt(entrada(`Digite o ${j+1}º valor do array A: `)) 
                console.log()
            }
            else if(i == 2){
                B[j] = parseInt(entrada(`Digite o ${j+1}º valor do array B: `))
                console.log()
            }
            else{
                C[j] = A[j] + B[j]
            }
        }
        (i==1)?console.log(A):(i==2)?console.log(B):console.log(C)
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ? ')
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}