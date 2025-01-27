//Ler um vetor de 20 posições, e identificar o maior valor e sua posição 

let Q = new Array(20).fill().map(() => (parseInt((Math.random()*10000).toFixed(0))))
console.log(Q)

let maior = 0
let posicao = 0
for(let i = 0; i < 20; i++){
    if(i == 0){
        maior = Q[i]
        posicao = i
    }
    if(Q[i]>maior){
        maior = Q[i]
        posicao = i
    }
}
console.log(`O maior numero é ${maior} localizado na ${posicao}° posição`)