//tempo em milisegundo
var timer = setInterval(()=> {
    document.write("Executando... <br/>");
}, 3000)

function acao(){
    document.write("Timeout... <br/>")
}

setTimeout (acao, 1000);