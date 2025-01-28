//armazenar 10 numeros em uma matriz, logo em seguida ler outra variavel e criar um array multiplicando todos os valores pela variavel criada 

const MultiplicacaoMatriz = () => {
    let P = new Array(10).fill().map(() => (parseInt(Math.random()*50).toFixed(0)))
    console.log(P)
    let x = parseInt((Math.random()*50).toFixed(0))
    console.log(x)
    let F = []
    for(let i = 0;i < 10;i++){
        F[i] = P[i] * x
    }
    return `O Array ficou assim: ${F}`
}

console.log(MultiplicacaoMatriz())