// Длина строки
const message = 'В этой страке буквы';
console.log(message.length);


// Конкатенация строк
const firstName = 'Viktor';
const lastName = 'Korenkov';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Напиши скрипт, который выведет строку в формате:
// "Гость X Y поселяется в Z номере Q"
// Подставив вместо X Y Z Q значение переменных

const room = 716;
const type = 'VIP';

let welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номере ' + room;
console.log(welcomeMsg);
welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номере ${room}`;
console.log(welcomeMsg);


// Шаблонные строки
const quantity = 15;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;
console.log(orderMsg);

// Нормализация с методом toLowerCase()
const brand = 'SamsUng';
const inDb = 'samsung';
const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);


let peremen = 'SamSUng';
console.log(peremen[4]);
console.log(peremen.slice(1).toLowerCase());
peremen = peremen[0] + peremen.slice(1).toLowerCase();
console.log(peremen);

// Поиск в строке с методом includes()
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Тут есть спам';
const string2 = 'РАСПРОДАЖА сегодня';
const string3 = 'просто текст';

console.log(string1.includes(blacklistedWord1));
console.log(string2.toLowerCase().includes(blacklistedWord2));
console.log(string3.includes(blacklistedWord1));