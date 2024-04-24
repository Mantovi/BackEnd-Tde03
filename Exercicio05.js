/*5. Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. 
A função deve usar a função de validação para verificar se os dados no objeto atendem à condição 
especificada e retornar true se sim, ou false caso contrário. (Ex. nome possui mais de 3 caracteres, 
senha existe, etc)*/

function validarDados(objeto, validacao) {
    return validacao(objeto);
}

function validarNome(objeto) {
    return objeto.nome.length > 3;
}

const dados = {
    nome: "leandro",
    idade: 18,
    email: "leandroMan@gmail.com"
};

console.log(validarDados(dados, validarNome));