// Objetivo: validar o tamanho de um array e retorna-lo caso o tamanho esteja correto, caso não lançar um erro.

function validaArrays(array, number) {
    try {
        if (!array && !number) {
            throw new ReferenceError('Envie os parâmetros!');
        }
        if (typeof array !== 'object') {
            throw new TypeError('Envie um elemento do tipo Array');
        }
        if (typeof number !== 'number') {
            throw new TypeError('Envie um elemento do tipo Number!');
        }
        if (array.length !== number) {
            throw new RangeError('Tamanho do array inválido!');
        }
        return array;
    } catch (e) {
        if (e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.stack);
        } else if (e instanceof ReferenceError) {
            console.log('ReferenceError');
            console.log(e.stack);
        } else {
            console.log('Outro tipo de erro!');
            console.log(e.stack);
        }
    }
}

console.log(validaArrays([1, 2, 3], 0));

// Exibe no console: RangeError! RangeError: Tamanho do array inválido! ...