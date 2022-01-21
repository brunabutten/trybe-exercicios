

// const trybe = () => {
//     console.log("Aula ao vivo!");
// }

const greetings = (callback) => {
    // const message = callback();
    console.log(callback());
}

// gian.greet

const gian = {
    name: 'Gian',
    surname: 'Fritsche',
    greet: greetings,
};

// gian.trabalhar();

const bomDia = () => {
    return "Bom dia!";
}

const boaTarde = () => {
    return "Boa tarde!";
}

const boaNoite = () => {
    return "Boa noite!";
}

const loveGreetings = () => "Oi amor, saudades! S2";
const formalGreetings = () => "Olá, tudo bem?";
const informalGreetings = () => "Bão, e ocê?";
const manoGreetings = () => "E aê mano? Firmeza?";

console.log(gian.name);
gian.greet(formalGreetings);

// const hora = 20;

// if (hora < 12) {
//     gian.greet(bomDia);
// } else if (hora < 18) {s
//     gian.greet(boaTarde);
// } else {
//     gian.greet(boaNoite);
// }
