//Fazer uma função, onde o usuario escolha entre alcool ou gasolina, e com base em sua escolha, retonar o valor total aplicando uma porcentagem em desconto

const entrada = require('prompt-sync')()

console.log('Bem vindo a minha função')
let contador = 1;
console.log()
while(contador == 1){

    let combustivel = (entrada('Digite o combustivel de sua preferencia: G-Gasolina A-Alcool: ')).toUpperCase()
    
    while((combustivel ==! 'G') && (combustivel ==! 'A')){
        combustivel = (entrada('Não são permitidos valores que não sejam como os mencionados anteriormente, por favor digite novamente: ')).toUpperCase()
    }

    let litros = parseInt(entrada('Quantos Litros você vai querer: '))

    let total = 0
    switch(combustivel){
        case'G':
            if(litros<=20){
                total = (litros*3.3)-((litros*3.3)*0.04)
            }
            else{
                total = (litros*3.3)-(litros*3.3)*0.06
            }
            break
        case('A'):
            if(litros<=20){
                total = (litros*2.9)-(litros*2.9)*0.03
            }
            else{
                total = (litros*2.9)-(litros*2.9)*0.03
            }
            break
        default:
            console.log('Foi')
            break
    } 

    console.log()
    console.log(`O total a pagar ficou: R$${total.toFixed(2).replace('.',',')}`)
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]sim [0]não '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')