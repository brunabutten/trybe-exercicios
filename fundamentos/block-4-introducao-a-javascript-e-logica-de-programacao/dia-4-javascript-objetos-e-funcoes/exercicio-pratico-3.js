// Exercício 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }
       ],
};

for (let keys in leitor) {
    leitor.livrosFavoritos.push(
        {
          titulo: 'Harry Potter e o Prisioneiro de Azkaban',
          autor: 'JK Rowling',
          editor: 'Rocco',
        },
      );

}
console.log('O livro favorito de ' + leitor.nome + ' '+ leitor['sobrenome'] + ' se chama "' + leitor.livrosFavoritos[0].titulo + '".');

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');

      
  
// console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');