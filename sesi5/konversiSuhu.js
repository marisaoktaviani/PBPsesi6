const { celciusToFahrenheit } = require('./rumusSuhu');
const chalk = require('chalk');

const celsius = 30;
const fahrenheit = celciusToFahrenheit(celsius);

console.log(chalk.blue.bold("================================="));
console.log(chalk.yellow.bold("    PROGRAM KONVERSI SUHU    "));
console.log(chalk.blue.bold("================================="));
console.log(`Suhu Awal  : ${chalk.green(celsius + '°C')}`);
console.log(`Hasil       : ${chalk.red.bold(fahrenheit + '°F')}`);
console.log(chalk.blue.bold("================================="));