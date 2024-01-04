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

var data = new Date();

var datanova = new Date("March 10, 2018");

Date.parse (datanova)

dataMilli = new Date (1520650800000)
datanova.getDate();
datanova.getMonth ();
datanova.getDay();
data.getFullYear();
data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
data.setDate (data.getDate() + 5)
data.setHours(data.getHours() + 10)

var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

dias[data.getDay()]
