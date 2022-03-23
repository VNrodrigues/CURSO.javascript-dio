// Arrays

/// Como declarar
let array = ['string', 1, true];
console.log(array);

/// Pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array'], ['array3']];
console.log(array2[0]);

/// Manipulando arrays
/// forEach - itera um array
array.forEach(function(item, index){console.log(item, index)});

/// push - adiciona item no final do array
array.push('novoItem');

/// unShift - adiciona item no início do array
array.unshift('novoItem2')

/// shift - remove item no início do array
array.shift();

/// pop - remove item no final do array
array.pop();

/// indexOf - retorno o índice de um valor
console.log(array.indexOf(true));

/// splice - remove / substitui um item pelo índice
array.splice(0, 1);

/// slice - retorna uma parte de um array existente
var novoArray = array.slice(0, 2);

// ============================================================ //

// Objetos

/// Criar objetos
let object = {
    number: 1,
    string: 'vini',
    boolean: true,
    object: objectIntern = {number: 7},
    array: ['array']
};

var obString = object.string;
console.log(obString);

var {string, boolean} = object;
console.log(string, boolean)