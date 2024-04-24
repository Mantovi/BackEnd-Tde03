/*4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. 
A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. 
A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas 
com os elementos restantes*/
function filtrarArray(arr, filtro) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (filtro(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}

function filtroNumerosPares(numero) {
    return numero % 2 === 0;
}

const numeros = [10, 55, 69, 74, 12, 30];
console.log(filtrarArray(numeros, filtroNumerosPares));
