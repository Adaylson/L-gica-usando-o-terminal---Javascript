//Ler idades de dois homens e duas mulheres, as quais não podem ser iguais, logo em seguida, realizar a soma entre o homem mais velho e a mulher mais nova, e o produto entre o homem mais novo e a mulher mais velha
const entrada = require('prompt-sync')();

let contador = 1;
console.log('Bem vindo a minha função')
while(contador==1){
    let homem1 = parseInt(entrada('Digite a idade do 1° homem: '))
    let homem2 = parseInt(entrada('Digite a idade do 2° homem: '))
    while(homem1 == homem2){
        homem2 = parseInt(entrada('Não é permitido a mesma idade, por favor digite-a novamente: '))
    } 
    console.log()
    let mulher1 = parseInt(entrada('Digite a idade da 1° mulher: '))
    let mulher2 = parseInt(entrada('Digite a idade da 2° mulher: '))
    while(mulher1 == mulher2){
        mulher2 = parseInt(entrada('Não é permitido a mesma idade, por favor digitar novamente: '))
    }
    let soma = 0
    let produto = 0
    if(homem1 > homem2){
        if(mulher1 > mulher2){
            soma = mulher2 + homem1
            produto = mulher1 * homem2
        }
        else{
            soma = mulher1 + homem1
            produto = mulher2 * homem2 
        }
    }
    else{
        if(mulher1>mulher2){
            soma = mulher2 + homem2
            produto = mulher1 * homem1
        }else{
            soma = mulher1 + homem2
            produto = mulher2 * homem1
        }
    }
    console.log()
    console.log('O resultado da soma ficou: ', soma,', já o do produto ficou:', produto)
    console.log()
    console.log('Obrigado por usar a minha função')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]SIM [0]NÃO '))
}
console.log()
console.log('Obrigado por usar a minha função')
console.log()
