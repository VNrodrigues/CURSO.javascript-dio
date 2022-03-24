// Return
function verificaPalindromo(string) {
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}
verificaPalindromo('cat')

// Throw
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}
verificaPalindromo('cat');

// Try.. Catch
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('')
}
function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        console.error(e)
    }
}
tryCatchExemplo('')

// Try.. Catch.. Throw
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('')
}
function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        throw e;
    }
}
tryCatchExemplo('')

// Try.. Catch.. Throw.. Finally
function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('')
}
function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        throw e;
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }
}
tryCatchExemplo('')

// Error - todos os parâmetros são opcionais
new Error(message, fileName, lineNumber, columnNumber);
const MeuErro1 = new Error('Mensagem Inválida');
throw MeuErro1; // "Error: Mensagem Inválida"

const MeuErro2 = new Error('Mensagem Inválida');
MeuErro2.name = 'InvalidMessage';
throw MeuErro2; // "InvalidMessage: Mensagem Inválida"