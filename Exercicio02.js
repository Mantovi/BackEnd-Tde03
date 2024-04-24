/*2. Escreva uma função chamada somaElementosPares que aceita um array de números como parâmetro e 
retorna a soma de todos os elementos pares do array.*/
function somaElementosPares(array){
    let somaPares = 0;

    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            somaPares += array[i];
        }
    }

    return somaPares;
}

const numeros = [10, 14, 16, 18, 12, 452687];
console.log(somaElementosPares(numeros));