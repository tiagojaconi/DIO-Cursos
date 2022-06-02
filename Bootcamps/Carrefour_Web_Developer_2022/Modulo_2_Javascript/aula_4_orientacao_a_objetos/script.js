// Objetivo: implementar o conceito de classe, herança e polimorfismo em uma conta bancária.

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get getSaldo() {
        return this.saldo;
    }

    set setSaldo(valor) {
        this.saldo = valor;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return 'Operação negada, não há saldo suficiente';
        }
        this.saldo -= valor;

        return this.saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get getCartaoCredito() {
        return this.cartaoCredito;
    }

    set setCartaoCredito(valor) {
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500 || valor > this.saldo) {
            return 'Operação negada!';
        }

        this.saldo -= valor;
    }
}