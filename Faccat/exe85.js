//fazer uma função para ler em todos os dias a temperatura, armazenar a maior e a menor temperatura do ano, a media do ano, e os dias que tiveram a temperatura menor que a media 

function MediaTemperatura() {
    const entrada = require('prompt-sync')()
    
    let temperatura = []
    let maior = 0
    let menor = 0
    let media = 0
    let menorMedia = []
    for(let i = 0; i < 10; i++){
        temperatura[i] = {temp:parseInt(entrada(`Digite o valor da temperatura no dia ${i+1}: `)), dia:i+1}
        if(i == 1){
            maior = temperatura[i].temp
            menor = temperatura[i].temp
        }
        if(temperatura[i].temp<menor){
            menor = temperatura[i].temp
        }
        if(temperatura[i].temp>maior){
            maior = temperatura[i].temp
        }
        media += temperatura[i].temp
    }
    media /= 10
    let cont = 0
    for(let i = 0; i < 10; i++){
        if(temperatura[i].temp<media){
            menorMedia[cont] = temperatura[i].dia
            cont ++
        }
    }

    return(`
            A maior temperatura do ano foi: ${maior}\n
            A menor temperatura do ano foi: ${menor}\n
            A media anual foi: ${media}\n
            E os dias que tiveram menores temperatura foi: ${menorMedia}
        `)
}

console.log(MediaTemperatura())