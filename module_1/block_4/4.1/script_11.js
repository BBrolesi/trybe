let salarioBruto = 3000;
let salarioLiquido;
let ir;

if (salarioBruto < 1556.94) {
    salarioLiquido = salarioBruto * 0.92;
} else if (salarioBruto < 2594.92) {
    salarioLiquido = salarioBruto * 0.91;
} else if (salarioBruto < 5189.82) {
    salarioLiquido = salarioBruto * 0.89;
} else {
    salarioLiquido = salarioBruto - 570.88;
}

if (salarioLiquido < 1903.98) {
    console.log('Isento de IR');
} else if (salarioLiquido < 2826.65) {
    ir = (salarioLiquido * 0.075) - 142.80
} else if (salarioLiquido < 3751.05) {
    ir = (salarioLiquido * 0.15) - 354.80
} else if (salarioLiquido < 4664.68) {
    ir = (salarioLiquido * 0.225) - 636.13
}
else {
    ir = (salarioLiquido * 0.275) - 869.36
}

console.log('Resultado: R$' + (salarioLiquido - ir));