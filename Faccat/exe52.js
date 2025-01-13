//Imprimiir os 10 numeros inteiros maiores que 100

const entrada = require('prompt-sync')()
console.log('Bem vindo a minha função')
let contador = 1 
console.log()
while(contador==1){
    console.log('Gerando numeros ...')
    console.log()
    let cem = 100
    for(let i = 1; i < 11; i++ ){
        cem++
        console.log(cem)
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    contador = parseInt(entrada('[1]SIM [0]NÃO '))
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')