package model;

public abstract class Conta implements iConta {
	
	private static final int AGENCIA_PADRAO = 1;
	private static int SEQUENCIAL = 1;
	
	protected int agencia;
	protected int numeroConta;
	protected double saldo;
	protected Cliente cliente;
	
	public Conta(Cliente cliente) {
		this.agencia = Conta.AGENCIA_PADRAO;
		this.numeroConta = Conta.SEQUENCIAL;
		this.cliente = cliente;
	}
	
	@Override
	public void sacar(double valor) {
		
		if ( valor <= this.saldo ) {
			this.saldo -= valor;
			System.out.println("Operação de saque realizada com sucesso.");
		} else if ( valor > this.saldo ){
			System.out.println("Operação inválida, saldo insuficiente.");
		}		
	}

	@Override
	public void depositar(double valor) {
		
		if( valor > 0 ) {
			this.saldo += valor;
			System.out.println("Operação de deposito realizada com sucesso.");
		} else if ( valor <= 0) {
			System.out.println("Operação inválida, valor inválido para deposito.");
		}
	}

	@Override
	public void transferir(double valor, Conta contaDestino) {
		
		if( valor <= this.saldo ) {
			this.sacar(valor);
			contaDestino.depositar(valor);
			System.out.println("Operação de transferência realizada com sucesso.");
		} else if (valor > this.saldo ) {
			System.out.println("Operação inválida, saldo insuficiente para transferência.");
		}
	}

	public int getAgencia() {
		return agencia;
	}

	public int getNumeroConta() {
		return numeroConta;
	}

	public double getSaldo() {
		return saldo;
	}

	public Cliente getCliente() {
		return cliente;
	}

	@Override
	public void extrato() {
		System.out.println(String.format("Titular: %s", this.cliente.getNome()));
		System.out.println(String.format("Agencia: %d", this.agencia));
		System.out.println(String.format("Numero: %d", this.numeroConta));
		System.out.println(String.format("Saldo: %.2f", this.saldo));
	}
	
}
