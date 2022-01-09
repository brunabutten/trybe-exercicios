
// EXERCICIO DE CORRIDA
// alert('Selecione um carro preferido primeiro!');

let bt = document.querySelector('.hey');
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');


let clicked = false;

car1.addEventListener('click', yourCar);
car2.addEventListener('click', yourCar);

function yourCar(e) {
    if (clicked == false) {
        e.target.style.border = 'solid 10px black';
        clicked = true;
    }
}


car1.style.marginLeft = '3px';
car2.style.marginLeft = '3px';

bt.addEventListener('click', onClicked);



function onClicked() {
    if (clicked == true) {
        let currentPos = car1.style.marginLeft;
        let random1 = ( Math.random() * 50)
        console.log(random1)
        let newPos = parseInt(currentPos) + random1;

        let currentPos2 = car2.style.marginLeft;
        let random2 = ( Math.random() * 100)
        console.log(random2)
        let newPos2 = parseInt(currentPos2) + random2;

        car1.style.marginLeft = newPos + 'px';
        car2.style.marginLeft = newPos2 + 'px';

        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('CINZA venceu!!');
        }

        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('AMARELO venceu!!');
        }
        
    }
}