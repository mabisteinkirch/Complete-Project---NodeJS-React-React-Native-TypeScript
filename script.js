var area = document.getElementById("area");

function entrar (){
    var nome = prompt("Qual é o seu nome?");

    if (nome === '' || nome === null){
        alert ("Campo não preenchido");
        area.innertHTML = "Clique no botão para acessar"
    }
    else {
        area.innertHTML = "Bem vindo " + nome;
    }

    
}