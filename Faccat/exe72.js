// Ler o preço de 15 produtos e retonar o maior e a media de todos os preços

const Iniciar = () =>{
    const entrada = require('prompt-sync')()

    const Produtos = () =>{
        let Maior = 0
        let Media = 0

        for(let i = 1; i<=15; i++){
            let numero = parseInt(entrada(`Digite o ${i}º Numero: `))
            if(i == 1){
                Maior = numero
            }
            if(numero > Maior){
                Maior = numero
            }
            Media += numero
        }

        return(`O maior valor é R$${Maior.toFixed(2).replace('.',',')} e a media de todos os valores ficou R$${(Media/15).toFixed(2).replace('.',',')}`)
    }

    console.log(Produtos())
}
console.log(Iniciar())