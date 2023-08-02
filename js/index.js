const numerosApostados = [];
const resultado = [];
let valorAposta = 0;
let qtdAcertos = 0;

const btnApostar = document.getElementById('btnApostar');
btnApostar.disabled = true;

sortearNumero();

const themeToggle = document.querySelector(
    '.switch input[type="checkbox"]'
  );
// Função que irá mudar o tema com base em se a alternância do tema está marcada ou não
function switchTheme(e) {
    if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    } else {
    document.documentElement.setAttribute("data-theme", "light");
    }
};
themeToggle.addEventListener('change', switchTheme, false);

function sortearNumero() {
    // Sorteando 6 números
    for(i = 0; i < 6; i++) {
        let numeroSorteado = Math.round(Math.random() * 59 + 1);
        // Se tiver um número repetido, ele passará pela condinção while e o mesmo será substituido por um novo número
        while(resultado.includes(numeroSorteado)) {
            let numeroSorteado = Math.round(Math.random() * 59 + 1);
        };
        // Insere o número sorteado na lista
        resultado.push(numeroSorteado);
    }
};

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

        // Mostra o valor apostado
        valorDaAposta();
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

function valorDaAposta(){
    switch(numerosApostados.length){
        case 6:
            valorAposta = "R$ 4,50"
            break;
        case 7:
            valorAposta = "R$ 31,50"
            break;
        case 8:
            valorAposta = "R$ 126,00"
            break;
        case 9:
            valorAposta = "R$ 378,00"
            break;
        case 10:
            valorAposta = "R$ 945,00"
            break;
        case 11:
            valorAposta = "R$ 2.079,00"
            break;
        case 12:
            valorAposta = "R$ 4.158,00"
            break;
        case 13:
            valorAposta = "R$ 6.006,00"
            break;
        case 14:
            valorAposta = "R$ 10.510,50"
            break;
        case 15:
            valorAposta = "R$ 17.517,50"
            break;
        default:
            valorAposta = "R$ 0,00"
            break;
    }
    const divValorAposta = document.getElementById("valor");
    divValorAposta.innerHTML = "<p>valor da Aposta</p><p class='valor'>" + valorAposta + "</p>";
};

function apostar() {
    // fazer a aposta - compara os números sorteados com os apostados
    for(i = 0; i < numerosApostados.length; i++) {
        if(resultado.includes(numerosApostados[i])) {
            qtdAcertos++;
        };
    };

    // mostrar resultado
    const divResultado = document.getElementById('resultado');
    for(i = 0; i < resultado.length; i++) {
        divResultado.innerHTML += "<div class='resultadoCircle'>"+ resultado[i] +"</div>";
    }

    // Mostrar a quantidade de acertos
    let divAcertos = document.getElementById('acertos');
    divAcertos.innerHTML = "<p>Acertos</p><p class='valor'>" + qtdAcertos + "</p>";

    // desabilitar todos os botões
    desabilitarTodosNumeros();

    // habilitar o botão reiniciar
    document.getElementById('btnReiniciar').style.display = 'inline';
};

function desabilitarTodosNumeros() {
    for(i = 1; i <= 60; i++) {
        document.getElementById("num_"+ i).disabled = true;
    }
}

let btn = document.querySelector("#btnReiniciar");
btn.addEventListener("click", function(){
    location.reload();
});

function mudarTema(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        // Define a preferência de tema do usuário como escuro
        localStorage.setAttribute('theme', 'dark');

    } else {
        document.documentElement.setAttribute("data-theme", "light");
        // Defina a preferência de tema do usuário como claro
        localStorage.setItem('theme', 'light');
    }
}

