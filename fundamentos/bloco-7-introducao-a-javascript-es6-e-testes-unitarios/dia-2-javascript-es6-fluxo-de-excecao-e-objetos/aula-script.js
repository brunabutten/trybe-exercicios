const getNumberOfDaysInMonth = (month) => {
    switch (parseInt(month)) {
        case 1:
        case 3:
        case 5:
            return 31;
        case 2:
            return 28;
        case 4:
            return 30;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;
        default:
            throw new Error("Mês inválido! Informe um valor entre 1 e 12!");
    }
};

const renderAmountOfDaysInMonth = () => {
    const month = document.getElementById('month').value;
    const result = document.getElementById('result');
    try {
        result.innerHTML = `O mês ${month} tem ${getNumberOfDaysInMonth(month)} dias`;
    } catch (error) {
        result.innerHTML = `<span style="color: red;">${error.message}</span>`;
        // alert(error.message);
        // console.error(error);
    } finally {
        document.getElementById('month').value = '';
    }
};

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', renderAmountOfDaysInMonth);
};