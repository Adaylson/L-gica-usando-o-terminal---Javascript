//fazer sequencia assim (1,12345678910)

function Sequencia(){

    for(let i = 1; i<=10; i++){
        let texto = `${i},`
        for(let j = 1;j <=10; j++){
            texto = texto+j
        }
        console.log(`(${texto})`)
    }
}
console.log(Sequencia())
