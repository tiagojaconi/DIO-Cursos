// Objetivo: Criar uma função que recebe um map, que retorne uma lista com os nomes dos usuários que são ADMIN.

const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value == 'ADMIN') {
			admins.push(key);
		}
	}
	return admins;
}

const userRoles = new Map();

userRoles.set('Tiago', 'User');
userRoles.set('Sabrina', 'ADMIN');
userRoles.set('Ana', 'ADMIN');

console.log(getAdmins(userRoles));

// Exibe no console: ['Sabrina', 'Ana']