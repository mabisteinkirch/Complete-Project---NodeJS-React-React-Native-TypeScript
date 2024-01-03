var area = document.getElementById("area");

function entrar (){
    var nome = prompt("Qual é o seu nome?");

    area.innertHTML = "Bem vindo " + nome;
}