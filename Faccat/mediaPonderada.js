//Fazer uma media ponderada com 3 notas, valendo 2,3,5 
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let cont = 1;
while(cont == 1){
    let n1 = parseInt(entrada('Digite a primeira nota: '))*2
    let n2 = parseInt(entrada('Digite a segunda nota: '))*3
    let n3 = parseInt(entrada('Digite a terceira nota: '))*5

    let m = n1+n2+n3

    console.log('A media final ficou: ', m/10)
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente?')
    cont = parseInt(entrada('[1]Sim [0]Não '))
}
console.log('Função finalizada com sucesso!')
console.log('Até mais tarde :)')
