function soma(n1, n2) {
    let soma = n1 + n2
    return soma
}

//console.log(soma(2,3)) 

let senhaCorreta = 'senai'

function comparaSenha(senhaCorreta, senhaEscrita){
    if(senhaEscrita == senhaCorreta){
        console.log('conectado')
    } else{
        console.log('senha incorreta')
    }
}

//comparaSenha(senhaCorreta, 'morango')
//comparaSenha(senhaCorreta, 'senai')
//ex1

function fatorial(N) {
    let resultado = 1
    for (let i=1; i<= N; i++){
        resultado = resultado * i
    }
    return resultado
}
let n = fatorial(20)
console.log(`O fatorial de 5 é `, n);
//ex2 
function ehpar(N){
    if(N % 2 == 0){
        console.log(N, 'é par');
    }else {
        console.log(N, 'é ímpar');
    }
}