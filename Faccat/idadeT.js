const entrada = require('prompt-sync')();

//Essa função vai calcular a quantidade de dias de vida de uma pessoa

console.log('Bem vindo a minha função')
let cont = 1 
while(cont == 1){
    let ano = parseInt(entrada("Digite o seu ano de nascimento: "));
    let mes = parseInt(entrada('Digite o mes de seu nascimento: '));
    let dia = parseInt(entrada('Digite o dia de seu nascimento: '));

    let dataa = Date.now();
    let data = new Date(dataa)
    let diaA = data.getDay()
    let mesA = data.getMonth()
    let anoA = data.getFullYear()

    let tempoVida = 365*(anoA-ano)+30*((mesA+1)-mes)+((diaA-1)-dia);
    
    console.log("O seu tempo de vida em dias, é equivalente a:", tempoVida," dias")

    console.log("Função finalizada com sucesso!")
    console.log("Deseja fazer novamente?")
    cont = parseInt(entrada("[1]sim [0]não: "))
}

console.log("Função finalizada com sucesso!")
console.log("Até mais tarde :)")