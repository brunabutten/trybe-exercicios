const greetings = (callback) => {
    console.log(callback());
}

const gian = {
    name: 'Gian',
    surname: 'Fritsche',
    greet: (callback) => {
        const message = callback();
        console.log(message);
    },
};

const bomDia = () => {
    return 'Bom dia!';
}
const boaTarde = () => {
    return 'Boa tarde!';
}
const boaNoite = () => {
    return 'Boa noite!';
}

const loveGreetings = () => 'Oi amor';
const formalGreetings = () => 'Oi, tudo bem?';
const informalGreetings = () => 'Bão, e ocê?';
const manoGreetings = () => 'E aê mano, firmeza?';

const hora = 20;

if (hora < 12) {
    gian.greet(bomDia);
} else if (hora < 18) {
    gian.greet(boaTarde);
} else {
    gian.greet(boaNoite);
}