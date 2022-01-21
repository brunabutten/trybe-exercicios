
const numerosLegais = [2, 3, 56, 5, 4, 7, 18, 90];

function meuFilter(array, callback) {
    const output = [];
    for (let index = 0; index < array.length; index += 1) {
        const element = array[index];
        if (callback(element, index, array)) {
            output.push(array[index]);
        }
    }
    return output;
}

// console.log(meuFilter(numerosLegais, (element) => {
//     return !(element > 10);
// }))

// console.log(numerosLegais.filter((element) => element > 10));

const users = [
    {firstName: "Homer", lastName: "Simpson", isDriver: true},
    {firstName: "Marge", lastName: "Simpson", isDriver: true},
    {firstName: "Bart", lastName: "Simpson", isDriver: false},
    {firstName: "Lisa", lastName: "Simpson", isDriver: false},
    {firstName: "Maggie", lastName: "Simpson", isDriver: false},
];

const validaSobrenome = (user) => user.lastName === 'Homer';
const validaHabilitacao = (user) => user.isDriver;

// console.log(
//     users.filter(validaSobrenome)
//         .filter (validaHabilitacao)
// );

// console.log(
//     users.filter(
//         (user) => user.firstName === 'Bart'
//     )
// );

// console.log(
//     users.filter(
//         (user) => user.isDriver
//     )
// );

// console.log(
//     users.find(
//         (user) => user.isDriver
//     )
// );


