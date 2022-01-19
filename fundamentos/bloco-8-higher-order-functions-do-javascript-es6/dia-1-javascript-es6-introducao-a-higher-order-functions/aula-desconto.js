
const carrinho = [10, 30, 20, 40];

const desconto10 = (total) => {
    return 10;
}

const desconto20 = (total) => {
    return 20;
}

const desconto10porCento = (total) => {
    return total * 0.10;
}

const desconto05porCento = (total) => {
    return total * 0.05;
}

const checkout = (carrinho, desconto) => {
    let total = 0;
    for (const item of carrinho) {
        total += item;
    }
    total -= desconto(total);
    return total;
}

/* const total = checkout(carrinho, desconto10porCento);
console.log(total); */



// BONUS

const criaDesconto = (porcentagem) => {
    const calculaDesconto = (total) => {
        return total * porcentagem/100;
    }
    return calculaDesconto;
}

/* const desconto15porCento = criaDesconto(15);
const total = checkout(carrinho, desconto15porCento); */

const total = checkout(carrinho, criaDesconto(25));
console.log(total);