// Mesma função que a anterior, só que com a opção de acicionar outra mercadoria

function Mercadoria1(){
    const entrada = require('prompt-sync')()
    let Total = 0

    const Iniciador = () =>{

        let mercadoria = parseInt(entrada('Digite a quantidade da mercadoria: '))
        let precount = parseInt(entrada('Digite o valor unitario: '))
    
        Total += Mercadoria(mercadoria, precount)
    
        console.log('Deseja Adicionar outra mercadoria ?')
        let escolha = parseInt(entrada('[1]sim [0]não '))
        escolha==1?Iniciador():console.log(`O total ficou ${Total.toFixed(2).replace('.',',')}`)
        return(Total)
    }
    
    function Mercadoria(mercadoria, precount){
    
        precoTotal = mercadoria * precount
    
        return(precoTotal)
    } 

    console.log(Iniciador())

    return'a'
}

console.log(Mercadoria1())

