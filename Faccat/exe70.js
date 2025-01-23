// A Função deve ler 100 valores e retornar o maior no final 
const entrada = require('prompt-sync')()

const MaiorValor = () => {
    let Maior = 0;
    for(let i = 1; i < 11; i++){
        let numero = parseInt(entrada(`Digite o ${i}° numero: `))
        if(i == 1){
            Maior = numero
        }
        
        if(Maior < numero){
            Maior = numero
        }
    }

    return(Maior)
}

let validador = 1

do{
    console.log(MaiorValor())
    validador = parseInt(entrada('Deseja fazer novamente: [1]Sim [0]Não '))
}while( validador == 1)