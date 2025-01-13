//escrever do 10 ate 1 usando for 

const entrada = require('prompt-sync')()
console.log('Bem vindo a minha função')
contador = 1 
console.log()
while(contador == 1){
    console.log('Gerando os numeros...')
    console.log()
    for(let i = 10; i > 0; i--){
        console.log(i)
    }
    console.log()
    console.log('Função finalizada com sucesso! ')
    console.log('Deseja fazer novamente ?')
    console.log('[1]sim [0]não')
    contador = parseInt(entrada())
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()