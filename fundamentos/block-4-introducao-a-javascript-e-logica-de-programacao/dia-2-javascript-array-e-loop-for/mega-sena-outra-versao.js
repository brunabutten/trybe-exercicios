
let megasena = [];

for (let count = 0; count < 6; count += 1) {
    megasena.push(Math.floor(Math.random() * 60) + 1);
}

let gabriel = [7, 12, 32, 48, 52, 58];

let countHits = 0;

for (let indexMegaSena = 0; indexMegaSena < megasena.length; indexMegaSena += 1) {
    console.log('Mega sena: ', megasena[indexMegaSena]);

    for (let indexGabriel = 0; indexGabriel < gabriel.length; indexGabriel +=1) {
        console.log('Gabriel: ', gabriel[indexGabriel]);

        if (megasena[indexMegaSena] === gabriel[indexGabriel]) {
            console.log("Acertou!");
            countHits += 1;

        }
    }
}
console.log(countHits);

