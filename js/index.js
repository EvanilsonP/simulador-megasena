const numerosApostados = [];

function selecionarNumeros(numero) {
    // desabilita numero escolhido
    desabilitarNumeroEscolhido(numero);
};

function desabilitarNumeroEscolhido(numero) {
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#ffffff";
};