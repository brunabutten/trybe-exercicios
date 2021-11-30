// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n

let number = 5;
let asterisco = "*"
let espaco = ''

for (let index = 0; index < number; index += 1) {
    espaco = espaco + asterisco;
}

for (let index = 0; index < number; index += 1) {
    console.log(espaco);
}