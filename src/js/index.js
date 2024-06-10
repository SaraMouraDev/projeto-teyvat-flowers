console.log(document.getElementById('btn-avancar'));

const btnAvancar = document.getElementById('btn-avancar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');
const btnVoltar = document.getElementById('btn-voltar');

btnAvancar.addEventListener('click', function () {
    const oUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
});

btnVoltar.addEventListener('click', function () {
    const oPrimeiroCArtao = cartaoAtual === 0;
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado()

    cartaoAtual--;
    mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

