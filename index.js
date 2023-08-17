"use strict";
let numero = 200;
let segundoNumero = 100;
console.log(numero + segundoNumero);
let idade = 16;
let texto = "Minha idade é: " + idade;
console.log(texto);
let idadeNova = 16;
let textoNovo = "Minha idade é: ";
console.log(textoNovo + idadeNova);
let verdadeiro = true;
console.log(verdadeiro);
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log("Tamanho do array: " + arr.length);
console.log("acessando a posição do array: " + arr[5]);
console.log(arr.indexOf(7));
let arrayTexto;
arrayTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));
function exibirTexto() {
    console.log('Exibindo meu Texto');
}
exibirTexto();
function exibirOutroTexto() {
    return "Exibindo outro Texto";
}
console.log(exibirOutroTexto());
function retornaNumero() {
    return 10;
}
console.log(retornaNumero());
function retornaTexto() {
    return "retornando string";
}
console.log(retornaTexto());
function soma(a, b) {
    return a + b;
}
console.log("O valor de soma é:" + soma(50, 100));
function multiplicação(a, b) {
    return a * b;
}
console.log("O valor da multiplicação é:" + multiplicação(5, 100));
function somaemultiplicação(a, b, c) {
    return (a + b) * c;
}
console.log("O valor de soma e multiplicação é:" + somaemultiplicação(50, 100, 2));
function somastring(a, b) {
    return "O resultado da multiplicação é:" + (a * b);
}
console.log("" + somastring(50, 100));
