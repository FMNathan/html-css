//Desafio 04

//Exercicio 01
console.log('Boas vindas');

//Exercicio 02
let nome = 'Nathan';
console.log(`Olá ${nome}`);

//Exercicio 03

let nome = 'Nathan';
alert(`Olá ${nome}`);

//Exercicio 04
let linguagemDeProgramacao = prompt('Qual a Linguagem de programação que você mais gosta?')
console.log(linguagemDeProgramacao);

//Exercicio 05
let valor1 = 33;
let valor2 = 33;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

//Exercicio 06
let valor1 = 1;
let valor2 = 1;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`)

//Exercicio 07
let idade = prompt('Digite a sua idade');
        if (idade > 17){
            console.log('Você é  maior de idade.');
} else{
            console.log('Você é menor de idade.');
}

//Exercicio 08
var numero = parseFloat(prompt('Digite um número:'));

        if (numero > 0){
            console.log('O número é positivo.');
        } else if(numero < 0){
            console.log('O número é negativo.');
        } else{
            console.log('O número é zero.');
        }

//Exercicio 09
let numero = 1;
while (numero <= 10){
console.log(numero);
numero++
}

//Exercicio 10
let nota = 9;
if (nota >= 8){
    console.log('Aprovado');
} else{
    console.log('Reprovado');
}

//Exercicio 11
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Exercicio 12
let numeroInteiroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(numeroInteiroAleatorio);

//Exercicio 13
let numeroInteiroAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(numeroInteiroAleatorio);