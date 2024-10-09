//ler a quantidade de litro e o tipo de combustivel, e com base nisso aplicar os desontos
const entrada = require('prompt-sync')();
console.log("Bem vindo a minha função")

let contador = 1;
while(contador == 1){
    let combustivel = entrada('Qual combustivel você vai querer: [G] gasolina | [A] alcool')
    let litro = parseInt(entrada('Quantos litros você vai querer: '));
    switch (combustivel){
        case('G'):
            litro*=3.30
            if(litro>20){
                litro = litro - (litro*0.06 )
            }
            else{
                litro = litro - (litro*0.04)
            }
        case('A'):
            litro*=2.90
            if(litro>20){
                litro = litro - (litro*0.05)
            }
            else{
                litro = litro - (litro*0.03)
            }
    }
    console.log()
    console.log('o valor final ficou: R$', litro)
    console.log()
    console.log('Função finalizada com sucesso!')
    console.log('Deseja fazer novamente ?')
    console.log('sim[1] não[0]')
    contador = parseInt(entrada())
    console.log()
}
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')