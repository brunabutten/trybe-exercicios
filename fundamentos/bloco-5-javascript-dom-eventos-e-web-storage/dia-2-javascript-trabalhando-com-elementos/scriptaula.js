

// Criar elemento HTML por Javascript()
let div = document.createElement('div');
div.className = 'main-box'
div.id = 'fourth';
div.innerText = 'conteudo.....'

// Adicionar e remover elemento no documento HTML
// document.getElementsByTagName('main')
main.appendChild(div)
main.removeChild(div)
// document.body.appendChild()

// Encontrar o primeiro filho
let firstElem = document.querySelector('#first').firstElementChild; // usa # quando é id
console.log(firstElem);
console.dir(firstElem) // mostra tudo que tem de edição nele

// Encontrar o próximo irmão
let proxElem = document.querySelector('#first').nextElementSibling; 
console.log(proxElem);

// Colocar multiplas classes aos elementos por javascript
drawing.className = "yellow circle small"; // não é uma boa prática 

drawing.classList.remove('red')
drawing.classList.remove('circle')
drawing.classList.remove('small')

drawing.classList.add('yellow')
drawing.classList.add('circle')
drawing.classList.add('small')

console.log(drawing.classList) // ele lista  

// Converter array em STRING
let frutas = ["banana", "laranja", "maçã", "manga"];
let resultado = frutas.join(', ');
console.log(resultado);

// Converter STRING em ARRAY
let frutasAr = resultado.split(', ');
console.log('frutasAr: ', frutasAr)

// EXEMPLOS COM FUNÇÕES

let arrClasses = ['yellow', 'circle', 'small']

let ball1 = createCustomElement(arrClasses);
second.appendChild(ball1);

createCustomElement(arrClasses);

function createCustomElement(myClasses) {
    let element = document.createElement('div');
    let str = myClasses.join(' ');
    element.className = str;

    return element
    //document.body.appendChild(element);
}