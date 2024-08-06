 console.log('oi')
 // Ex. 01
 let nome= 'João'
console.log(nome)

// Ex. 02
let a= '5'; b = '10'
console.log(a,b)

// Ex. 03 
// Declarando as variáveis primeiroNome e ultimoNome
let primeiroNome = "Josefa";
let ultimoNome = "Silva";

// Concatenando os valores das variáveis para formar o nome completo
let nomeCompleto = primeiroNome + " " + ultimoNome;

// Exibindo o nome completo no console
console.log(nomeCompleto);

// Ex, 04 
// Declarando a variável pessoa como um objeto
let pessoa = {
    nome: "Maria",
    endereco: "Rua das Flores, 123",
    idade: 30,
    telefone: "(11) 98765-4321"
}
// Exibindo os valores no console
console.log("Nome:", pessoa.nome);
console.log("Endereço:", pessoa.endereco);
console.log("Idade:", pessoa.idade);
console.log("Telefone:", pessoa.telefone);

// Ex. 05 
let vetor = ['maça', 'banana', 'laranja']
console.log(vetor) 

// Ex. 06 
vetor = [1, 2, 3, 4, 5]
let primeiro = vetor [0]
let ultimo = vetor [4]
console.log(primeiro,ultimo)
 
// Ex.07
vetor = ['vermelho', 'verde', 'azul']

for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i])
}
// Ex. 08
var idade = 17
if(idade < 18){
    console.log("Menor de idade!")
}else{
    console.log("Maior de idade!")
}
// Ex. 09
var nota = 2
if(nota >= 7){
    console.log("aprovado")
}else if (nota < 7 || nota>5){
    console.log("recuperaçao")
}else {
    console.log("reprovado")
}
