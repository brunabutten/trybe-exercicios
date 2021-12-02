let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let modelo in car) {
    console.log(modelo + ': ' + car[modelo]);
}