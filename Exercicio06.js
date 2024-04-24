/*6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de 
geração como parâmetros. A função de geração deve receber um índice e retornar o valor correspondente 
da lista. A função gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado 
da função de geração.*/

function gerarLista(n, funcaoGeracao) {
    const lista = [];

    for (let i = 0; i < n; i++) {
        lista.push(funcaoGeracao(i));
    }

    return lista;
}

function gerarQuadrados(indice) {
    return indice * indice;
}

const tamanhoLista = 5;
const listaGerada = gerarLista(tamanhoLista, gerarQuadrados);
console.log(listaGerada);