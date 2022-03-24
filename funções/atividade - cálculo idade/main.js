function calcIdade (anos) {
    return `Daqui ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`
}

const pessoa1 = {
	nome: 'Vinicius',
	idade: 18,
};

const pessoa2 = {
	nome: 'Marcelo',
	idade: 49,
};

const pessoa3 = {
	nome: 'Janaína',
	idade: 41,
};

console.log(calcIdade.call(pessoa3, 40));
console.log(calcIdade.apply(pessoa2, [24]));