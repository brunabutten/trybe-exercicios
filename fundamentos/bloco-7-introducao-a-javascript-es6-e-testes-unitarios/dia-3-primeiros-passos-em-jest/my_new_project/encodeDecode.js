/* 4 - Para as funções encode e decode crie os seguintes testes usando Jest:
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */

function mapString(objectMap, string) {
    const splitString = string.split('');
    const mappedArray = [];

    for (let index = 0; index < splitString.length; index += 1) {
        const character = splitString[index];
        const mappedValue = objectMap[character];

        if (mappedValue) {
            mappedArray.push(mappedValue);
        } else {
            mappedArray.push(character);
        }
    }

    return mappedArray.join('');
}

function encode(string) {
    const map = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    return mapString(map, string);
}

function decode(string) {
    const map = {
  : 'a',
  : 'e',
  : 'i',
  : 'o',
  : 'u',
    };
return mapString(map, string);
  }

const functions = { encode, decode };
module.exports = functions;