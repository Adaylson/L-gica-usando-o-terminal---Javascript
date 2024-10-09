//ler 3 lados de um triângulo, e retornar se o mesmo forma um ou não, para isso um lado não pode ser maior que a soma dos outros dois
const entrada = require('prompt-sync')();
console.log('Bem vindo a minha função')
let contador = 1;

while(contador == 1){
    let lado1 = parseInt(entrada('Digite o primeiro lado:'));
    let lado2 = parseInt(entrada('Digite o segundo lado: '));
    let lado3 = parseInt(entrada('Digite o terceiro lado: '));

    console.log()
    if(lado1>lado2+lado3){
        console.log('Não é um triangulo')
    }
    else if(lado2>lado1+lado3){
        console.log('Não é um triangulo')
    }
    else if(lado3>lado1+lado2){
        console.log('Não é um triangulo')
    }
    else{
        console.log('É um triangulo')
    }

    console.log()
    console.log('Função finalizada com sucesso! ')
    console.log('Deseja fazer novamente? ')
    contador = parseInt(entrada('[1]sim [0]não '))
    console.log()
}

console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')