// calcular a media de filhos e salarios de um certo numero de habitantes
// e logo em seguida levantar os seguintes dados
// Media de salario da populacao
// Media de filhos 
// Maior salario 
// e percentual das pessoas que recebem menos que 150

function Iniciar(){

   function SalarioFilho(quantidade){
        let MaiorSalario = 0
        let MediaSalario = 0
        let MediaFilhos = 0
        let Menos150 = 0
        for(let i = 1; i <= quantidade; i++){
            let salario = parseInt((Math.random()*(300-50)+50).toFixed(2))
            console.log(salario)
            let filho = parseInt(Math.random()*(12).toFixed(0))
            console.log(filho)

            if(i == 1){
                MaiorSalario = salario
            }
            if(MaiorSalario < salario){
                MaiorSalario = salario
            }

            MediaFilhos += filho
            MediaSalario += salario

            if(salario < 150){
                Menos150++
            }
        }
        MediaFilhos /= quantidade
        MediaSalario /= quantidade

        return(`Media salario: R$${MediaSalario.toFixed(2).replace('.',',')} \b Media Filhos : ${MediaFilhos.toFixed(0)} \b Maior Salario R$${MaiorSalario.toFixed(2).replace('.',',')} \b ${Menos150} recebem menos que R$150,00`)
   }     

   console.log(SalarioFilho(parseInt((Math.random()*(15-5)+5).toFixed(0))))
}

console.log(Iniciar())