/*3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. 
A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array 
com os elementos resultantes.*/

function mapearArray(arr, func){
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(func(arr[i]));
    }
        return newArr;
}

function dobrar(numero) { //a função definida 
    return numero * 2;
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(mapearArray(numeros, dobrar));