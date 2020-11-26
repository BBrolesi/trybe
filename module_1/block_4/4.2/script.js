let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maiorNumero = 0;
let menorNumero;
let quantidadeNumerosImpares = 0;
let numbers2 = [];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}

console.log('Soma:', soma);

media = soma / numbers.length;

console.log('Media:', media);

if (media > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}

maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index++) {
    maiorNumero < numbers[index] ? maiorNumero = numbers[index] : null;
}

console.log('Maior numero: ', maiorNumero);

for (let index = 0; index < numbers.length; index++) {
    if ((numbers[index] % 2) != 0) {
        quantidadeNumerosImpares++;
    }
}

if (quantidadeNumerosImpares > 0) {
    console.log('Quantidade de numeros impares: ', quantidadeNumerosImpares);
}
else {
    console.log('nenhum valor ímpar encontrado');
}

menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index++) {
    menorNumero > numbers[index] ? menorNumero = numbers[index] : null;
}

console.log('Menor numero: ', menorNumero);

for (let index = 1; index < 26; index++) {
    numbers2.push(index);
}

console.log(numbers2);

for (let index = 1; index < numbers2.length; index++) {
    console.log(numbers2[index] / 2)
}



