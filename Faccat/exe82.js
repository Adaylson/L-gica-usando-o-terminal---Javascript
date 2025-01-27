console.log('Bem vindo a minha função')

const entrada = require('prompt-sync')()
let q = []

for(let i = 0; i< 20; i++ ){
    q[i] = parseInt(entrada(`Digite o ${i+1}º numero do vetor: `))
}
for(let i = 19; i>=0; i--){
    console.log(q[i])
}
console.log('Função finalizada')