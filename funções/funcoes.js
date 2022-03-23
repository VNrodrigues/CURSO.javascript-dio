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