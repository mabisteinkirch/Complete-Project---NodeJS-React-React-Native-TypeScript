function convidados(nomes){
    console.log(nomes);
}

convidados("Mabi", "Lucas")

function convidados(nome1, nome2){
    console.log(nome1);
    console.log(nome2);
}

convidados("Mabi", "Lucas")

//REST operator

function convidados(...nomes){
    console.log(nomes);

    const sorteio = Math.floor(Math.random() * nomes.length);
    console.log("Nome sorteado foi: " + nomes[sorteio]);
}

convidados("Mabi", "Lucas")