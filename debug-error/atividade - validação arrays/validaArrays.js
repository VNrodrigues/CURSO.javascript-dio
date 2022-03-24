function validaArray(array, num) {
    try {
        if (!array || !num) throw ReferenceError("Defina os parâmetros!");

        if (typeof array !== "object") throw new TypeError("O array precisa ser do tipo object!");
    
        if (typeof num !== "number") throw new TypeError("O array precisa ser do tipo object!");
    
        if (array.length !== num) throw new RangeError("Tamanho de array inválido!");

        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um ReferenceError");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este é um TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este é um Rang");
            console.log(e.message);
        } else {
            console.log("Erro não reconhecido: " + e);
        }
    }
}

console.log(validaArray())