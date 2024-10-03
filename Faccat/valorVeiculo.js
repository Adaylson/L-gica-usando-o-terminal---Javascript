//ler o custo de produção de um veiculo, aplicar o valor da distribuidora e o total de impostos
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let cont = 1;
while(cont == 1){
    let valorInicial = parseInt(entrada('Digite o valor de fabrica do veiculo: '));

    let valorFinal = valorInicial + valorInicial*0.28 + valorInicial*0.45;

    console.log("O valor final do veiculo ficará R$" + valorFinal.toFixed(2))
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    cont = parseInt(entrada('[1]sim [0]não '))
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')