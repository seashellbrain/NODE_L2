require('dotenv').config(); // Подключаем dotenv

console.log(`Имя: ${process.env.FIRST_NAME}`);
console.log(`Фамилия: ${process.env.LAST_NAME}`);
console.log(`Группа: ${process.env.GROUP}`);
console.log(`Номер в списке: ${process.env.LIST_NUMBER}`);
