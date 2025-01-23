//let o total de mercadorias em estoque, logo em seguida com base nisso definir o preço de cada mercadoria e por ultimo o total de mercadorias em estoque

const entrada = require('prompt-sync')()

function Mercadoria(estoque, preco){
    totalPreco = estoque * preco

    return(
        `O valor total em estoque ficou: R$${parseInt(totalPreco).toFixed(2).replace('.',',')}`
    )
}

let contador = 1

while(contador == 1){
    console.log('Bem vindo a função do estoque ')


    console.log()
    let estoque = parseInt(entrada('Digite quantos de um produto você tem em estoque: '))
    let preco = parseInt(entrada('Digite o preço unitario dassa mercadoria: '))

    console.log()
    console.log(Mercadoria(estoque, preco))
    console.log()

    console.log("Função finalizada com sucesso!")
    console.log('Deseja fazer novamente? ')
    contador = parseInt(entrada('[1]SIM [0]Não'))
    console.log()
}
console.log('Obrigado por usar a minha função ')
console.log('Até mais tarde :)')