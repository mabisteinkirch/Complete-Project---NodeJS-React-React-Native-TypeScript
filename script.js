//spread operator

/*
let primeiros = [1,2,3];

let numeros = [...primeiros, 4,5,10];
console.log(numeros);
*/
/*
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
*/

function novoUsuario(info){
    
    let dados ={
        ...info,
        status: "ATIVO",
        inicio: "01/01/2024",
        codigo: "12345"
    }


    console.log(dados);
}

novoUsuario({nome:"Mabi", sobrenome: "Steinkirch", cargo: "DEV"})