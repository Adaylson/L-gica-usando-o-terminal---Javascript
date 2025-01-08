//ler o ano de nascimento de uma pessoa, e retorna se a mesma poderá votar ou não

console.log('Bem vindo(a) a função da idade para votar !!')
const entrada = require('prompt-sync')()

let contador = 1
console.log()
while(contador == 1){
    let ano = parseInt(entrada('Digite o ano de seu nascimento:'))
    console.log()

    if(((new Date).getFullYear() - ano) >= 16){
        console.log('Pode votar')
    }
    else{
        console.log('Não pode votar')
    }

    console.log()
    console.log("Função finalizada com sucesso!")
    console.log("Deseja verificar a idade de outra pessoa ?")
    contador = parseInt(entrada('[1]Sim [0]Não '))
    console.log()
}
console.log("Obrigado por usar a minha função :) ")
console.log("Até mais tarde :) ")