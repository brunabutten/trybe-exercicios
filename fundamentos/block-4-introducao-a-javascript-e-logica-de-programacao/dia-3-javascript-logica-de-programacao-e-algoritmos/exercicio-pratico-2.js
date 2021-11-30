// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

let tam = 5;
let simbolo = "*"
let espaco = ''

for (let index = 0; index <= tam; index += 1) {
    console.log(espaco);
    espaco = espaco + simbolo;
}

