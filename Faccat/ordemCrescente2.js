//ler dois numeros, e escrevelos em ordem crescente
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let contador = 1 ;
while(contador == 1){
    let n1 = parseInt(entrada('Digite o primeiro valor: '))
    let n2 = parseInt(entrada('Digite o segundo valor:'))
    while(n1 == n2){
        n2 = parseInt(entrada('Não é permitido valores iguais, Digite novamente: '))
    }
    console.log()
    if(n1>n2){
        console.log(n2 + ' ' + n1)
    }
    else{
        console.log(n1+ " " + n2)
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não '))
}

console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')