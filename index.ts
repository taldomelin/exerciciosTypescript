let numero: number = 200;
let segundoNumero: number = 100;

console.log(numero + segundoNumero);

let idade: number = 16;
let texto: string = "Minha idade é: " + idade;

console.log(texto);

let idadeNova: number = 16;
let textoNovo: string = "Minha idade é: " ;

console.log(textoNovo + idadeNova);

let verdadeiro: boolean = true;

console.log(verdadeiro);

let arr: number[] = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
console.log("Tamanho do array: " + arr.length);
console.log("acessando a posição do array: " +arr[5]);
console.log(arr.indexOf(7));

let arrayTexto: Array<string>;

arrayTexto = ['ab', 'bc', 'cd', 'de'];

console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log('Exibindo meu Texto');
}

exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro Texto";
}

console.log(exibirOutroTexto());

function retornaNumero(): number {
    return 10;
}

console.log(retornaNumero());

function retornaTexto(): string{
    return "retornando string";
}

console.log(retornaTexto());

function soma(a: number, b:number): number {
    return a + b; 
}

console.log("O valor de soma é:" + soma(50, 100));

function multiplicação(a: number, b:number): number {
    return a * b; 
}

console.log("O valor da multiplicação é:" + multiplicação(5, 100));

function somaemultiplicação(a: number, b:number, c:number): number {
    return (a + b) * c; 
}

console.log("O valor de soma e multiplicação é:" + somaemultiplicação (50, 100, 2));

function somastring(a: number, b:number): string {
    return "O resultado da multiplicação é:" + (a*b);
}

console.log("" + somastring(50, 100));