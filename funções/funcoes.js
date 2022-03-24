// Estrutura
function nome(parametros){
    /// instruções
    return; /// valor de retorno
}

// Função anônima
const soma = function (a, b) {
    return a + b;
}
soma(1, 2) /// 3
soma(5, 4) /// 9

// =============================================== //
//Função autoinvocável
(
    function() {
        let name = "Digital Innovation One"
        return name;
    }
)(); /// Digital Innovation One
    
(
    function(a, b) {
        return a + b;
    }
)(1, 2); /// 3
    
const soma2 = (
    function() {
        return a + b;
    }
)(1, 2);

console.log(soma2) /// 3
    
// =============================================== //
// Callbacks
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma3 = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2)
const resultSub = calc(sub, 1, 2)

console.log(resultSub); /// -1
console.log(resultSoma); /// 3

// =============================================== //
// Objeto "arguments"

function findMax() {
    let max = -Infinity;
    
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
/// -> findMax(1, 2, 3, 6, 90, 1)
/// <- 90

function showArgs() {
    return arguments;
}

// =============================================== //
// Arrays
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers))

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() /// 0
confereTamanho(1, 2) /// 2
confereTamanho(3, 4, 5) /// 3

// =============================================== //
// Objetos - object destructing
const user = {
    id: 42,
    displayName: 'Vini',
    fullName: {
        firtName: 'Vinicius',
        lastName: 'Rodrigues'
    }
};

function userId({id}) {
    return id;
}
function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}
userId(user) /// 42
getFullName(user) /// Vinicius Rodrigues

// =============================================== //
// if/else
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    
    if (ehNegativo) {
        return false `É positivo`;
    } 
    
    return true `É positivo`
}

// =============================================== //
function numeroPositivo2(num) {
    const ehNegativo2 = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo2) {
        return "Esse número é negativo!";
    } else if (!ehNegativo2 && maiorQueDez) {
        return "Esse número é positivo e maior que dez!";
    }
    
    return "Esse número é positivo!"
}

// =============================================== //
// Switch/case
function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
            case 2:
            return "gato";
        case 3:
            return "passáro";
            default:
            return "peixe"
    }
}
getAnimal(1) /// cão
getAnimal(3) /// pássaro
getAnimal("1") /// peixe


// =============================================== //
// For
function multiplicaPorDois(arr) {
    let multiplicados = []; //

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }
    
    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros); /// 4, 66, 912, 712, 80

// For/in
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
/// João
/// 20
/// Salvador

// For/of
function logNumeros(nums) {
    for(num of nums) {
        console.log(num)
    }
}
const nums = [30, 20, 233, 2];
logLetras(nums)
/// 30
/// 20
/// 233
/// 2

// =============================================== //
// While
function exemploWhile() {
    let num = 0
    
    while (num <= 5) {
        console.log(num);
        num++;
    }
}

exemploWhile();
/// 0
/// 1
/// 2
/// 3
/// 4
/// 5

// Do/while
function exemploDoWhile() {
    let num = 6
    
    do {
        console.log(num);
        num++;
    } while (num <= 5);
}

exemploDoWhile();
/// 6

// =============================================== //
// This
const pessoa = {
    firstName: "Vinicius",
    lastName: "Oliveira",
    id: 1,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getId: function () {
        return this.id;
    }
};

pessoa.fullName(); /// Vinicius Oliveira
pessoal.getId(); /// 1  


// Tipos de funções

/// Função declarativa
function funcao() {
    console.log('Tudo certo, jovem.');
}
funcao();

/// Função com parametros
function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}
mensagem('Hello,', 'world');

/// Função de expressão 
var funcao = function() {
    console.log('Sou uma mensagem de função de expressão!')
}
funcao();

/// Arrow Function
var funcao = ( ) => {
    console.log('Sou uma arrow function');
}
funcao()