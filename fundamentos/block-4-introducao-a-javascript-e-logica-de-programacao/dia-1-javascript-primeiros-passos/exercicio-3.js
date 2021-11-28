//anotações da aula

//if - se
//else - senão

// if (condicao) {
//     //codigo
// }
// else if (outracondicao) {
//     //outra condicao
// }
// else {
//     //condicao
// }

let trybe = 19.40;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Fora dos momentos síncronos");
}

//exercício

const grade = 80;

if (grade >= 80) {
    console.log("Parabéns, você foi aprovado!");
}
else if (grade > 80 && grade >= 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovado");
}
