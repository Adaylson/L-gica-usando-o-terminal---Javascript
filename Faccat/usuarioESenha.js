//ler um nome de usario e a senha, e se não foram iguais aos armazenados, não autorizar a entrada 
const entrada = require('prompt-sync')();

console.log('Bem vindo a minha função')

let contador = 1;
let limite = 1
while(contador == 1){
    let usuario = entrada('USUARIO: ')
    let senha = entrada('SENHA: ')

    if(usuario=='Adaylson'&&senha=='40028922'){
        console.log("Bem vindo ao sistema :)")
        contador = 2
    }else{
        if(limite == 5){
            console.log()
            console.log("Muitas tentativas, reinicie o aplicativo e tente novamente!")
            contador = 2
        }
        else{
            console.log('Usuario ou senha incorretos, tente novamente!')
        }
        limite+=1
    }
}
console.log()
console.log('Obrigado por usar a minha função')
console.log('Até mais tarde :)')
console.log()