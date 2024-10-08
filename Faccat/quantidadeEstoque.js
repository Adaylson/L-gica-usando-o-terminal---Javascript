//fazer um programa para ler a quantidade de um item no estoque, a quantidade maxima e a quantidade minima, depois levantar a media, e dizer a situação
const entrada = require('prompt-sync')();

console.log('Bem vindo a função do estoque')
let contador = 1;

while(contador == 1){
    let nome = entrada('Digite o nome do produto: ')
    let quantidade = parseInt(entrada('Quantos deste produto tem em estoque>: '))
    let maximo = parseInt(entrada('Qual valor maximo que pode ser guardado no estoque: '))
    let minimo = parseInt(entrada("Qual a quantidade minima: "))

    let media = (maximo+minimo)/2
    console.log()
    if(quantidade >= media){
        console.log('não efetuar compra')
    }
    else{
        console.log('efetuar compra')
    }
    console.log('Obrigado por ter usado a minha função')
    console.log('Deseja fazer novamente?')
    contador = parseInt(entrada('[1]sim [0]não '))
}
console.log()
console.log('Até mais tarde :)')
console.log()