var mostrar = "segunda";
var diaSelecionado = "segunda";
var segunda = document.getElementById("segunda");
var terca = document.getElementById("terca");

var botao = document.getElementById("botaoSelecionarDia");

function selecionarDia (diaSelecionado) {
    console.log("começou a função")
    if (diaSelecionado === "segunda") {
        segunda.style.display = "block";
       terca.style.display = "none";
    } else {
        segunda.style.display = "none";
        terca.style.display = "block";
    } 
}

botao.onclick = function() {
    selecionarDia(diaSelecionado);
};



