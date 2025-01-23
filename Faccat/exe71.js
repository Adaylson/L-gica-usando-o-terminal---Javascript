//Ler um numero no qual vai ser usado como quantidade de numeros a serem gerados, assim extraindo a media e o maior desses numeros 
function Iniciar() {
    const entrada = require('prompt-sync')()

    function Numeros(quantidade){
        let Maior = 0
        let Media = 0
        for(let i = 1; i <= quantidade; i++){
            let numero = parseInt(entrada(`Digite o ${i}º numero: `))
    
            if(i == 1){
                Maior = numero
            }
            if(numero > Maior){
                Maior = numero
            }
    
            Media += numero
        }
    
        Media /= quantidade
    
        return(
            `O maior numero é: ${Maior} e a media de todos os numero colocados ficou: ${Media}`
        )
    }

    console.log(Numeros(10))
    return'Obrigado'
}

console.log(Iniciar())
