function number(a, b) {
    if (a > b) {
        return 'A é maior que B';
    } else if (a < b) {
        return 'B é maior que A';
    } else {
        return 'Os números são iguais'
    }
}

console.log(number(2, 2));



function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else {
      return segundoNum + ' é maior que ' + primeiroNum;
    }
  }

  console.log(number(4, 3));



  function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
    if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
      return 'O maior número é: ' + primeiroNum;
    } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
      return 'O maior número é: ' + segundoNum;
    } else {
      return 'O maior número é: ' + terceiroNum;
    }
  }

  console.log(number(4, 3, 2));