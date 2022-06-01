// Objetivo: Dado um array, retornar outro array com valores únicos.

function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const myArray = [30, 50, 50, 2, 3, 2];

console.log(uniqueElements(myArray));

//Exibe no console: [30, 50, 2, 3]