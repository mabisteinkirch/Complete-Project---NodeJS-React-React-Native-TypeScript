function pedir (){
    var valor = prompt("Digite um valor");

    switch(Number(valor) ){
        case 1:
            alert("Você escolheu 1- Suco");
            break;
        case 2:
            alert("Você escolheu 2- Água");
            break;
        default:
            alert("Escolha uma opção");
            break;
    }
}