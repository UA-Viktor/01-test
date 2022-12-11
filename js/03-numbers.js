let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);

let salary = 1300.16472;
// Или 1
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);

// Или 2
// salary = Number(salary.toFixed(2));
// console.log(salary);

// Или 3
console.log(Number(salary.toFixed(2)));

let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

const base = 2;
const power = 5;

const result2 = Math.pow(base, power);
console.log(result2);
console.log(2 ** 3);

// 1. Попросить ввести число и сохранить в переменую
// 2. Попросить ввести степерь и сохранить в переменную
// 3. Возвести введенные данные в степень и вывести

let base1 = prompt('Давай число');
base1 = Number(base1);
console.log(base1);

let power1 = prompt('Давай степень');
power1 = Number(power1);
console.log(power1);

const resultat = base1 ** power1;
console.log(resultat);
 

// Генерим псевдослучайные числа
const max = 50;
const min = 30;
console.log(Math.random() * (max - min) + min);