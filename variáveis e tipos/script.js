// Tipos Primitivos

/// Boleanos
var VouF = false;
console.log(VouF);
console.log(typeof(VouF));

/// Number
var numero = 1;
console.log(numero);
console.log(typeof(numero));

/// String

var nome = 'vini';
console.log(nome);
console.log(typeof(nome));

// ====================================================== //

// Variáveis
var variavel = 'vinicius'
variavel = 'vini';
console.log(variavel);

let variavel2 = 'vn';
variavel2 = 'VN'
console.log(variavel2);

const constante = 'vinicius';
console.log(constante);

// ====================================================== //

// Escopo

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}

escopoLocal();


// ====================================================== //

// Atribuição
var atribuicao = 'vinicius';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação idêntica
var compIdentica = '0' === 0;
console.log(compIdentica);

var compIdentica2 = 0 === 0;
console.log(compIdentica2);

// ====================================================== //

// Operações

/// Adição
var adicao = 1 + 1;
console.log(adicao);

/// Subtração
var subtracao = 3 - 1;
console.log(subtracao);

/// Multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

/// Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

/// Divisão Inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

/// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// ====================================================== //

// Operadores Relacionais

/// Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

/// Menor que
var menorQue = 5 < 2;
console.log(menorQue);

/// Maior ou igual
var maiorOuIgual = 5 >= 5;
console.log(maiorOuIgual);

/// Menor ou igual
var menorOuIgual = 5 <= 5;
console.log(menorOuIgual);

// ====================================================== //

// Operadores Lógicos

/// && "e"
var e = true && false;
console.log(e);

/// || "ou"
var ou = true || false;
console.log(ou);

/// '!' "não"
var nao = !true;
console.log(nao);
