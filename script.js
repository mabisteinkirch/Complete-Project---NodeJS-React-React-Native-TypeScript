var area = document.getElementById("area")

function entrar(){
    var nome = prompt("Qual é o seu nome?");

    if (nome === '' || nome === null){
        alert ("Campo não preenchido");
        area.innertHTML = "Clique no botão para acessar"
    }
    else {
        area.innerHTML = "Bem vindo " + nome + " ";

        let botao_sair = document.createElement("button");
        botao_sair.innerText = "Sair da conta";
        botao_sair.onclick = sair;
        area.appendChild(botao_sair);
    }

    
}

function sair (){
    alert ("até mais");
    area.innerHTML = "Você saiu";
}