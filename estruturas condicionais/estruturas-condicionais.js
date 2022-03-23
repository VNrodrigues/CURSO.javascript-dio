var jogador1 = 0;
var jogador2 = 0;
var placar;

// IF ternário
jogador1 !== -1 && jogador2 !== -1 ? console.log("Os jogadores são válidos.") :
console.log("Os jogadores são inválidos.");

// Utilizando IF
if (jogador1 == jogador2 && jogador1 <= 0 && jogador2 <= 0) {
    console.log("Ninguém marcou ponto!");
} else if (jogador1 > 0 && jogador2 == 0) {
    console.log("O jogador1 marcou ponto!");
    placar = jogador1 > jogador2
} else if (jogador1 == jogador2 && jogador2 > 0 && jogador1 >0) {
    console.log("O jogo está empatado!");
    placar = jogador1 > jogador2
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log("O jogador2 marcou ponto!");
    placar = jogador2 > jogador1
} else if (jogador2 = jogador1) {
    console.log("O jogo está empatado!");
    placar = jogador1 == jogador2
} else {
    console.log("Ninguém marcou ponto.");
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("O jogador1 ganhou!");
        break;
    case placar = jogador2 > jogador1:
        console.log("O jogador2 ganhou")
        break;
    default:
        console.log("O jogo ficou empatado!")
        break; 
}

let array = ['valor1', 'valor2', 'valor3'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// for - executa instrução até que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}

// for/in executa repetição a partir de uma propriedade com array
for (let i in array) {
    console.log(i);
}

// com objecti
for (i in object) {
    console.log(i);
}

// for/of - executa repetição a partir de valorcom array
for (i of array) {
    console.log(i);
}

// com object
for (i of object.propriedade1) {
    console.log(i);
}

// While - executa instrução enquanto determinada condição for verdadeira
var a = 0;

while (a < 10) {
    a++;
    console.log(a)
}

// do while - executa instrução até que determinada instrução seja falsa
do {
    a++;
    console.log(a);
} while (a < 10)