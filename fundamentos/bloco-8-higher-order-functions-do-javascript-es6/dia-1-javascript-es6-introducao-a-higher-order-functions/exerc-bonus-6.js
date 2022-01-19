// Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.damageDealt;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaSpent;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);