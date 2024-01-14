//função somar não anônima

function somar (a, b){
    let total = a + b;
    return console.log (total);

}

somar(10, 30);

let anonymousFunction = (a, b) => {
    let total = a + b;
    console.log (total);
}

anonymousFunction(10,30);

let numeros = [1,2,5,10];

numeros.map ((item) => {
    console.log(item);
})