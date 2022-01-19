// Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';
const coof = () => 'Bora tomar café';

// Crie mais uma função que retorne a string 'Partiu dormir!!';
const dormir = () => 'Partiu dormir!!';

// Adora desenvolva uma HOF chamada 'doingThings' e configure essa função para que imprima no console o resultado de execução das funções que você criou nos exemplos anteriores.
const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};

doingThings(wakeUp);
doingThings(coof);
doingThings(dormir);
