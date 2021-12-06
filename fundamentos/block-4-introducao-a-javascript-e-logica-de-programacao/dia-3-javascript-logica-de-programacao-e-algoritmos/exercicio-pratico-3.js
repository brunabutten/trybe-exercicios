// Agora inverta o lado do triângulo

let tam = 5;
let simbolo = "*"
let espaco = ''
let position = tam;


for (let index = 0; index <= tam; index += 1) {
    for (let columnIndex = 0; columnIndex <= tam; columnIndex += 1) {
        if (columnIndex < position) {
            espaco = espaco + ' ';
        } else {
            espaco = espaco + simbolo;
        }
    }
    console.log(espaco);
    espaco = '';
    position -= 1;
}

