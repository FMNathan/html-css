 //Desafio 03

//Exercicio 01 Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10){
    console.log(contador);
    contador++;
}

//Exercicio 02 Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador = 10;
while (contador >= 0){
    console.log(contador);
    contador--;
}

//Exercicio 03 Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
let numeroMaximo = prompt('Digite um número para a contagem regressiva');
while (numeroMaximo >= 0){
    console.log(numeroMaximo);
    numeroMaximo--;
}

//Exercicio 04 Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
let numeroMaximo = prompt('Digite um número para a contagem progressiva:');
let contador = 0;
while (contador <= numeroMaximo){
  console.log(contador);
  contador ++
}