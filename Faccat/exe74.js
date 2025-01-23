// implimir a tabuada do 1 ate 10 do 1 ate 10
const Iniciar = () => {
    const entrada = require('prompt-sync')()

    const Tabuadas = () =>{

        for(let i = 1; i <= 10; i++){
            console.log(`Tabuada do ${i}`)
            for(let j = 1; j <= 10; j++){
                console.log(`${i} + ${j} = ${i*j}`)
            }
            console.log()
        }
    }

    let contador = 1

    while(contador == 1){
        console.log(Tabuadas())
        console.log('Deseja fazer novamente ?')
        contador = parseInt(entrada('[1]SIM [0]NÃO '))
    }
}
console.log(Iniciar())