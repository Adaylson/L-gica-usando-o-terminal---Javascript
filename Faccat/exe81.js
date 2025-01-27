function MenorNumero(){
    let Q = new Array(20).fill().map(() => (parseInt(Math.random()*1000).toFixed(0)))
    let menor = 1
    let posicao = 1
    for(let i = 0; i <20; i++){
        
        if(i == 0){
            menor = Q[i]
            posicao = i
        }

        if(menor < Q[i]){
            menor = Q[i]
            posicao = i
        }
    }
    return`O menor valor ${menor} na posicao ${posicao}`
}

console.log(MenorNumero())