let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo: number = 0;

if(campoSaldo){
    campoSaldo.innerHTML = saldo.toString();
}

function somarAoSaldo(soma: number) {
    saldo += soma;
    if(campoSaldo){
        campoSaldo.innerHTML = saldo.toString();
    }
}

function limparSaldo() {
    saldo = 0;
    if(campoSaldo){
        campoSaldo.innerHTML = saldo.toString();
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}