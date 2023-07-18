const title = "lesson02";
const screens = "Simple, Complex, Interactive";
let screenPrice = 1200;
const rollback = 95;
let fullPrice = 100000000;
const adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive); // тип данных значений переменных

console.log(screens.length); // длину строки из переменной

console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани"); // Вывести в консоль

console.log(screens.toLowerCase());
console.log(screens.split(", ")); // Привести строку к нижнему регистру и разбить строку на массив

let expression = fullPrice * (rollback/100);
console.log(expression);
