function number(a) {
    if (a > 0) {
        return 'A é um número positivo';
    } else if (a < 0) {
        return 'A é um número negativo';
    } else {
        return 'A é igual a zero'
    }
}

console.log(number(0));



function positiveNegative(number) {
    if (number > 0) {
      return 'positive';
    } else if (number < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }