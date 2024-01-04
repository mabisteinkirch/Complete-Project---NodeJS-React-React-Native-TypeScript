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

function media (nota1, nota2){
    var media = (nota1, nota2) / 2;

    if (media >= 7){
        console.log ("Aluno aprovado com média: " + media)
    }
    else if (media < 7){
        console.log ("Aluno reprovado com média: " + media)
    }
}

function aluno (nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

    console.log (mensagem);
}