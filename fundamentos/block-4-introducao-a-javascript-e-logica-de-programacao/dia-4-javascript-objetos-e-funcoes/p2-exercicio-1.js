// Exercício 1 parte II funções

function palindromo(word) {
    for(index in word) {
        if(word[index] != word[(word.length - 1) - index]) {
            return false;
        }
    }
    return true;
}

// Outra forma de resolver:

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento')); 

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento')); 