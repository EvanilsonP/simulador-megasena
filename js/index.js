const numerosApostados = [];

const btnApostar = document.getElementById('btnApostar');
btnApostar.disabled = true;

function selecionarNumeros(numero) {
    // Limitando quantidade de escolhas dos números da megasena: Min 6 - max 15
    if(numerosApostados.length >= 0 && numerosApostados.length < 15) {
        numerosApostados.push(numero);

        // desabilita numero escolhido
        desabilitarNumeroEscolhido(numero);
    };

    // Habilita o botão de apostar
    if(numerosApostados.length > 5) {
        btnApostar.disabled = false;
    };

    // mostrar quantidade de números apostados
    const qtdApostas = document.getElementById("qtdNumeros");
    qtdApostas.innerHTML = "<p>Qtd Números</p><p class='valor'>" + numerosApostados.length + "</p>";
};

function desabilitarNumeroEscolhido(numero) {
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#ffffff";
};