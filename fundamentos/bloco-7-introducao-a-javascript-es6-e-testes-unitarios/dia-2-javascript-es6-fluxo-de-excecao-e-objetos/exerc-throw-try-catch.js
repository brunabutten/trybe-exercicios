const verificador = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        /* return 'Os valores devem ser numéricos'; */
        throw new Error('Os valores devem ser numéricos');
    }
};

const sum = (value1, value2) => {
    try {
        verificador(value1, value2);
        return value1 + value2;
    } catch (error) {
        throw error.message;
    }
};

console.log(sum(2, '3'));