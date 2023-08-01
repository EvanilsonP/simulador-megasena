const numerosApostados = [];

function selecionarNumeros(numero) {
    // Limitando quantidade de escolhas dos números da megasena: Min 4 - max 15
    if(numerosApostados.length >= 0 && numerosApostados.length < 15) {
        numerosApostados.push(numero);

        // desabilita numero escolhido
        desabilitarNumeroEscolhido(numero);
    };
};

function desabilitarNumeroEscolhido(numero) {
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#ffffff";
};