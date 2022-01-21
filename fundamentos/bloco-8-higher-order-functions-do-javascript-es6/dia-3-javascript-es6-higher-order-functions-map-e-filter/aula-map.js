const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
  ];
  
  
  const emails = users
      .filter((user) => user.isDriver)
      .map((elemento) => `${elemento.firstName}_${elemento.lastName}@betrybe.com`
  );
  console.log(emails);
  
  
  function meuMap(array, callback) {
    const novoArray = [];
    for (let index = 0; index < array.length; index += 1) {
      const resultado = callback(array[index], index, array);
      novoArray.push(resultado);
    }
    return novoArray;
  }
  
  const array = [1, 4, 9, 16];
  // const resposta = meuMap(array, Math.sqrt);
  const resposta = array.map(Math.sqrt);
  console.log(array, resposta);