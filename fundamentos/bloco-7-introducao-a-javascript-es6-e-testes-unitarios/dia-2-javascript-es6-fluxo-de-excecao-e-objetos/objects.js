
const gian = {
    name: "Gian",
    age: 30,
    tryber: true,
    pairs: ["Gisele", "Daniel"],
    class: {
        number: 19,
        tribe: "C"
    }
}

// console.log(gian.tryber);
// console.log(gian['tryber']);
// console.log(gian.class.number);

gian.favoriteNumber = 3;
const theKey = "favorite color";
gian[theKey] = '#829305';
gian.age = 21;

// delete gian.name;

// console.table(gian);

// 1. Object.values

// console.log(Object.values(gian));

const favoriteFood = {
    roberio: "pudim",
    talita: "batata frita",
    arlisson: "churrasco",
    danny: "churrasco",
}

// const foods = Object.values(favoriteFood);
// console.log(foods.includes("pudim"));
// console.log(foods.includes("cuca recheada"));


// const array = Object.values(gian);
// for (const value of array) {
//     console.log(`${value} é do tipo: ${typeof value}`);
// }


// 2. Object.keys

// console.log(Object.keys(favoriteFood));

const respondents = Object.keys(favoriteFood);
// console.log(respondents.includes("talita"));
// console.log(respondents.includes("gian"));


const gianKeys = Object.keys(gian);
// console.log(gianKeys.includes("name"));
// console.log(gianKeys.includes("salary"));

// for (const key of gianKeys) {
for (let index = 0; index < gianKeys.length; index += 1) {
    const key = gianKeys[index];
    // console.log(`o valor de ${key} é ${gian[key]}`);
}

// 3. Object.entries

// console.log(Object.entries(favoriteFood));

const entries = Object.entries(favoriteFood)
// console.log(entries[0][0]);
// console.log(entries[0][1]);

// for (const entry of entries) {
//     if (entry[1] === "churrasco") {
//         console.log(entry[0]);
//     }
// }

// 4. Object.assign

const favoriteColors = {
    ewerson: "verde",
    paula: "azul",
    arlisson: "preto",
    baianor: "transparente"
}

const vazio = {}

const favoriteThings = Object.assign({}, favoriteFood, favoriteColors);
console.table(favoriteThings);
console.table(favoriteFood);



const gianClone = gian;
// const gianClone = Object.assign({}, gian);

gianClone.name = "Clone"
gian.name = "Original"

console.log(gian.name, gianClone.name);

// favoriteThings = {
//     roberio: "pudim",
//     talita: "batata frita",
//     danny: "churrasco",
//     ewerson: "verde",
//     paula: "azul",
//     arlisson: "preto",
//     baianor: "transparente"
// }


// deep copy javascript 
// JSON.strinfy e JSON.parse 
