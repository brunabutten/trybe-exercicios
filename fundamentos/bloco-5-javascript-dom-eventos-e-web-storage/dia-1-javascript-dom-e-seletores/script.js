/* console.log('oi tudo bem') */

// OBJETO DOCUMENT
/* console.log(document) */

// OBJETO BODY
/* console.log(document.body) */

// BUSCAR ELEMENTOS
// retornar 1 elemento específico
/* console.log(document.getElementById('cont1')) */
/* console.log(cont1) */

// retornar vários elementos com algo em comum)
/* console.log(document.getElementsByClassName('estilo1')) */
/* let minhaTag = document.querySelector('.estilo1')
console.log(minhaTag) */
/* let minhaTag = document.querySelectorAll('#cont1 .estilo1')
console.log(minhaTag) */

// buscar elementos anteriores
/* let minhaTag = cont2.parentNode
console.log(minhaTag) */
/* let minhaTag = cont2.children
console.log(minhaTag[0]) */


// buscar elementos filho
/* let minhaTag = cont2.children
console.log(minhaTag[0]) */

// buscar a partir de qualquer elemeto
/* (cont1.getElementsByClassName('estilo1') */

// ATUALIZAR PROPRIEDADES DOS ELEMENTOS
// DOC https://www.w3schools.com/jsref/default.asp
/* document.querySelector('h2').innerText = 'Minha lista 1' */
/* document.querySelector('ul').style.backgroundColor = '#cccccc' */
/* document.querySelectorAll('ul')[1]).style.backgroundColor = '#cccccc' */

// REMOVE


// ADD/REMOVE CLASS, ID, STYLE


// EXEMPLOS COM FUNÇÕES


/*   function clearTextByTagName(tagName) {
      let tags = document.getElementsByTagName(tagName)

      for(let i = 0; i < tags.length; i++){
          tags[i].innerText = '';
      }
     // console.log(tags)
  }
  clearTextByTagName('li') */


function clearTextByTagName(tagName) {
    let tags = document.getElementsByTagName(tagName)

    for (let i = 0; i < tags.length; i++) {
        if (tags[i].classList == 'estilo1') {
            continue;
        }
        tags[i].innerText = '';
        // tags[i].innerHTML= '<p> meu texto </p>';
    }
}

clearTextByTagName('li')
