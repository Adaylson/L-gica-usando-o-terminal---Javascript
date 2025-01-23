//Armazenar 10 nomes em um array, e em seguida, fazer uma busca se esse nome existe no array ou não 

const BuscaNome = (Nome) =>{
    let nomes = ['Adaylson', 'Ana Beatriz', 'Luciene', 'Lucielle', 'Adilson', 'Josiane', 'Campeão', 'Pulma', 'Tigresa', 'Roberto Carlos']

 

    for(let i = 0; i<10; i++){
        if(nomes[i] === Nome){
            console.log(`Nome encontrado na posição ${i}`)
        }
    }

}

const Iniciar = () =>{
    let contador = 1

    while(contador==1){
        console.log(BuscaNome('Adaylson'))
        console.log('Deseja fazer novamente ?')
        console.log('[1]sim [0]não')
        contador = parseInt((Math.random()).toFixed(0))
        console.log(contador)
    }
}

console.log(Iniciar())