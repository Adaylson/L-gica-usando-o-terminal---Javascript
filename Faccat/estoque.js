//Ler quantos de um produto tem no estoque, a quantidade maxima, e a quantidade minima possivel, logo em seguida, calcular a media e apontar se está maior ou igual a media apontar que não precisa comprar, caso o contrario efetuar a compra
const entrada = require('prompt-sync')()
let contador = 1;
console.log('Bem vindo a função do estoque :)')
console.log()
while(contador==1){

    let estoque = parseInt(entrada('Digite a quantidade de itens que tem no estoque: '))
    let maximo = parseInt(entrada('Digite a quantidade maxima que esse item é permitido no estoque: '))
    let minimo = parseInt(entrada('Digite a quantidade minima que esse item é permitido no estoque: '))

    let media = (maximo+minimo)/2

    console.log()
    if(estoque<media){
        console.log('Efetuar compra')
    }
    else{
        console.log('Não efetuar compra :)')
    }
    console.log()
    console.log('Função finalizada com sucesso! ')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')