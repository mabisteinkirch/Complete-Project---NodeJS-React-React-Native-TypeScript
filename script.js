//MAP - PERCORRER TODO UM ARRAY

let lista = ["Mabi", "Lucas", "Nekochan"];

lista.map((item, index) => {
    console.log("Esse é o item: " + item + " Esse é o index: " + index);
})

//REDUCE - BUSCA REDUZIR UM ARRAY

let numeros =  [5,3,2];
// somar todos os numeros

let total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log("Esse é o acumulador: " + `${acumulador}`);
    console.log("Esse é o numero: " + `${numero}`);
    console.log("Esse é o indice: " + `${indice}`);
    console.log("Esse é o original: " + `${original}`);
    console.log("====================================")

    //pega o número e soma com o resultado
    return acumulador += numero;
})

console.log("Total do REDUCE: " + total);

// FIND - Devolve o primeiro item que ele encontrar

let listagem = [5, 3, "Mabi", 2, "Gato"]

let busca = listagem.find((item)=>{
 if (item === "Mabi")
    return console.log ("Encontrado");
})

console.log(busca);

//FILTER - saber quantos itens repetidos tem

let nomes = ["Mabi", "Lucas", "Mabi", "Mabi", "Gato", "Lucas"]

let resultado = nomes.filter((item)=>{
 if (item === "Lucas")
    return item.length;
})

console.log(resultado);