// Criar um retangulo 60 x 10

const posicionar = (xx,yy,palavra) =>{
    let largura = parseInt(palavra.length)
    let atual = 0
    
    for(let y = 1; y <= 10; y++){
        let retangulo = ''
        for(let x = 1; x <= 60; x++){
            if(y==1 || y == 10){
                retangulo = retangulo+'+'
            }
            else{
                if(x == 1 || x == 60){
                    retangulo = retangulo + '+'
                }
                else if(yy == y){
                    if(x >= xx && x <= largura+10){
                        if(atual < largura){
                            retangulo = retangulo + palavra.substr(atual,1)
                            atual++
                        }
                        else{
                            retangulo = retangulo + ' '
                        }
                    }
                    else{
                        retangulo = retangulo + ' '
                    }
                }
                else{
                    retangulo = retangulo + ' '
                }
            }
        }
        console.log(retangulo)
    }
}

console.log(posicionar(10,7,'Adalyson'))