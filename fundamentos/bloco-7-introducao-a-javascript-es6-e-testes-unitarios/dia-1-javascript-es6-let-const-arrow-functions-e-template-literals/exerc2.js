const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortAdd = () => {
    oddsAndEvens[0] = 2
    oddsAndEvens[1] = 3
    oddsAndEvens[2] = 4
    oddsAndEvens[3] = 7
    oddsAndEvens[4] = 10
    oddsAndEvens[5] = 13
    return oddsAndEvens;
}

const novaLista = sortAdd();

console.log(`Os números ${novaLista} se encontram ordenados de forma crescente !`);


const oddsAndEvents = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvents);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);


const oddsAndEvenss = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvenss.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);