// Uma função que calcula o total de eleitores de um municipio e retorna a sua porcentagem
const entrada = require('prompt-sync')();

console.log("Bem vindo a função dos eleitores")
let a = 1
while(a==1){
    let validos = parseInt(entrada("Digite os votos validos: "))
    let nulos = parseInt(entrada('Digite os votos nulos: '))
    let brancos = parseInt(entrada('Digite os votos Brancos: '))

    let totalVotos = validos+nulos+brancos;

    console.log("Nesse municipio, o total de votos foram: ")
    let resultado = validos/totalVotos*100 
    console.log(resultado.toFixed(2) + "% Validos")
    resultado = nulos/totalVotos*100;
    console.log(resultado.toFixed(2) + "% Nulos")
    resultado = brancos/totalVotos*100;
    console.log(resultado.toFixed(2) + "% Brancos")
    console.log()
    console.log("Função finalizada com sucesso!")
    console.log("Deseja fazer novamente?")
    a = parseInt(entrada('[1]sim [0]não '))
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde')