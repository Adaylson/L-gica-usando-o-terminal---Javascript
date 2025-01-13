//Escrever de um até dez usando o for 
const entrada = require('prompt-sync')()

console.log('Bem vindo a minha função')
console.log('Gerando a sequencia...')

contador = 1 
while(contador == 1){
    console.log()
    for(let i = 1; i < 11; i++){
        console.log(i)
    }
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    console.log('[1]SIM [0]NÃO')
    contador = parseInt(entrada())
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')