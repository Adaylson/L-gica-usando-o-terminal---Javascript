//Verificar quantas maças o consumidor vai querer, caso ele queira menos que 12 o preço será 1.30, caso o contrario o preço será 1,00

const entrada = require('prompt-sync')()

console.log("Bem vindo a minha função")
let contador = 1;

while(contador == 1){
    console.log()
    let maca = parseInt(entrada("Digite a quantidade de maçãs que você irá querer: "))
    console.log()

    if(maca < 12){
        preco = 1.30
    }
    else{
        preco = 1
    }

    console.log(`O total por ${maca} maças ficou R$${(maca*preco).toFixed(2).replace('.',',')}`)
    console.log()
    console.log("Função finalizada com sucesso!")
    console.log("Deseja realizar outra compra ?")
    contador = parseInt(entrada("[1]Sim [0]Não "))
    console.log()
}
console.log("Obrigado por usar a minha função")
console.log("Até mais tarde :)")