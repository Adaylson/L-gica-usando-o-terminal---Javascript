//ler dois valores e retornar o maior entre eles 

console.log("Bem vindo a função dos dois valores")
const entrada = require('prompt-sync')()

let contador = 1;
console.log()
while(contador == 1){
    let n1 = parseInt(entrada('Digite o primeiro numero: '))
    let n2 = parseInt(entrada('Digite o segundo numero: '))
    while(n1==n2){
        console.log("Não são permitidos valores iguais, digite novamente o segundo valor")
        n2 = parseInt(entrada())
    }

    console.log()
    if(n1>n2){
        console.log(`${n1} é maior que ${n2}`)
    }
    else{
        console.log(`${n2} é maior que ${n1}`)
    }
    console.log()
    console.log("Função finalizada com sucesso!")
    console.log("Deseja verificar outros numeros ?")
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log("Obrigado por usar a minha função")
console.log("Até mais tarde ")