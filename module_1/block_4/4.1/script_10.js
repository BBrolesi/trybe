let custo = 1000;
let valor = 1300;
let imposto = 0.2;

if (custo < 0 || valor < 0) {
    console.log('Valor invalido');
}
else {
    let custoTotal = custo * (1 + imposto);
    let lucro = valor - custoTotal;
    console.log('R$: ' + lucro * 1000);
}

