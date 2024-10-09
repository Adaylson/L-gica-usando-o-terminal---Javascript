//ler 2 numeros e retornar o resultado de sua validação
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função');
let contador = 1;

while(contador==1){
    let numero1 = parseInt(entrada('Digite o primeiro numero: '))
    let numero2 = parseInt(entrada('Digite o segundo numero: '))

    console.log()
    if(numero1>numero2){
        console.log('Primeiro é maior')
    }
    else if(numero2>numero1){
        console.log('O segundo é maior')
    }
    else{
        console.log('Os dois são iguais')
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não: '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()