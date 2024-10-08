//calcular o peso ideal de uma pessoa com base na sua altura
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')
let contador = 1;
while(contador == 1){
    let nome = entrada('Digite o seu nome: ')
    let altura = parseFloat(entrada('Quantos de altura você tem: '))
    while(altura < 0|| altura > 3){
        altura = parseFloat(entrada('Valor invalido, digite novamente: '))
    }
    let sexo = entrada('seu sexo é [1]masculino [2]feminino: ')
    console.log(sexo)
    console.log(sexo != "1")
    while((sexo != "1" && sexo != 2)){
        sexo = entrada('Valor invalido, digite novamente: [1]Masculino [2]Feminino: ')
        console.log(sexo)
        console.log(sexo != "1")
        console.log(sexo != "2")
        console.log(sexo != "1" || sexo != "2")
    }
    let peso = 0;
    if(sexo=="1"){
        peso = (72.7*altura)-58;
    }
    else{
        peso = (62.1*altura)-44.7;
    }

    console.log()
    console.log('O seu peso ideal é: '+ peso);
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente?')
    contador = parseInt(entrada('[1]sim [0]não '))
}
console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()