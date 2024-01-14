//spread operator

/*
let primeiros = [1,2,3];

let numeros = [...primeiros, 4,5,10];
console.log(numeros);
*/

let pessoa ={
    nome: "Mabi",
    cargo: "TI"
}

let novaPessoa ={
    ...pessoa,
    status: "ATIVO",
    cidade: "Nice / FR"
}

console.log(novaPessoa);