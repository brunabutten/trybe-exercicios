let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  for (let keys in info) {
      console.log(info[keys]);
  }

//   for (let keys in info) {
//       console.log(keys);
//   }

// console.log('Bem vinda, ' + info.personagem);
// console.log('Bem-vinda, '+ info['personagem']);


// console.log(info.recorrente);
// info.recorrente = 'Sim';
// info['recorrente'] = 'Sim';
// console.log(info);