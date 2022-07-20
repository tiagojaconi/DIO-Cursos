package Main;

import model.Cliente;
import model.ContaCorrente;
import model.ContaPoupanca;

public class Main {

	public static void main(String[] args) {

		Cliente cliente = new Cliente();
		cliente.setNome("Tiago");
		
		ContaCorrente contaCorrente = new ContaCorrente(cliente);
		ContaPoupanca contaPoupanca = new ContaPoupanca(cliente);

		contaCorrente.depositar(150);
		contaCorrente.transferir(100, contaPoupanca);
		
		contaCorrente.extrato();
		contaPoupanca.extrato();

	}

}
