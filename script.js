//objeto

let pessoa = {
    nome: "Mabi",
    sobrenome: "von Steinkirch",
    cargo: "Fullstack engineer",
    altura: 1.59
}

//acessar: pessoa.altura

//console.log (pessoa);
//console.log (pessoa.nome);
//console.log (pessoa.cargo);

//desconstruir o array
const { nome: rename, cargo } = pessoa;
console.log (rename);
console.log (cargo);

let nomes = ["Mabi", "Lucas", "Mika"];

//forma padrão de pegar algum item
console.log(nomes[0]);

//desconstruir para pegar mais que uma variável por vez

let { 0:primeiro, 2:ultimo} = nomes;
console.log(primeiro);
console.log(ultimo);

let [primeiroNome, segundoNome] = nomes;