let anguloA = 60;
let anguloB = 60;
let anguloC = 60;

let somaAngulo = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos) {
    if (somaAngulo === 180) {
    console.log(true);
} else {
    console.log(false);
}
} else {
    console.log('Erro: ângulo inválido');
}