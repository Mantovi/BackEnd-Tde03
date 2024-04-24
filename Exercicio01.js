/*1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro 
e retorna o maior elemento do array.*/
function encontrarMaiorElemento(arr) {

    let maior = arr[0]; // Assume que o primeiro elemento é o maior
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > maior) { // Se o array é maior que o atual maior
            maior = arr[i]; // Atualiza o maior elemento se encontrarmos um maior
        }
    }
    return maior;
}

const numeros = [15, 80, 98, 99, 27, 63, 15];
console.log(encontrarMaiorElemento(numeros)); // printa 20