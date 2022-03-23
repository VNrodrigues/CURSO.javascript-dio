// Solução 1
function verificaPalindromo(string) {
    if(!string) return "string inválida";

    return string.split("").reverse().join("") == string
}

// ============================================================= //

// Solução 2
function verificaPalindromo2(string) {
    if(!string) return "string inválida";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[string[i] !== string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

let myVar = "ovo"; 

console.log(verificaPalindromo2(myVar))