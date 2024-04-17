//Exercicio 01
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo'){
    alert('Bom fim de semana');
} else{
    alert('Boa semana')
}

//Exercicio 02
numero = prompt('Digite um número positivo ou negativo');
if (numero > 0){
    alert('Número positivo!');
} else{
    alert('Número negativo!');
}

//Exercicio 03
alert('Bem vindo ao Jogo');
let pontuacao = prompt('Digite sua pontuação');
if (pontuacao >= 100){
    console.log('Parabéns, você venceu!')
} else{
    console.log('Tente novamente')
}

//Exercicio 04
let saldoDaConta = 900; 
alert(`Seu saldo é de R$${saldoDaConta}.`)

//Exercicio 05
let nome = prompt('Qual é o seu nome?');
alert(`Boas-vindas ${nome}`)
