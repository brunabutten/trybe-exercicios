/* const fetch = require('node-fetch');

const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data.value))
        .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke(); */

// Chuck Norris can write multi-threaded applications with a single thread.

/* const fetch = require('node-fetch');

const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    const result = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.value)
        .catch((error) => `Algo deu errado :( \n${error}`);

    console.log(result);
};

fetchJoke(); */

// Chuck Norris can write multi-threaded applications with a single thread.
// Usando o await , a fetchJoke espera o fetch terminar toda sua execução (até o último .then() ou .catch() ) para só depois executar o console.log() .

const fetch = require('node-fetch');

const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.value);
    } catch (error) {
        console.log(`Algo deu errado :( \n${error}`);
    }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
// Note que, quando você usa o try e o catch , é executado o código inserido no escopo do try , e caso alguma parte desse código dê erro, você o trata no escopo do catch(error) .