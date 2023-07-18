let num = 266219;
sNum = num.toString();
console.log(sNum);

let multiplicator = 1;

let figures = ("" + num).split("").map(Number);
console.log(figures);

for (let i = 0; i < sNum.length; i++) { // к букве в строке можно обращаться по номеру её положения
    const figure = Number(sNum[i]); // буква – тоже строка, надо её перевести в число через Number()
    multiplicator = multiplicator * figure;
}

console.log(multiplicator); //произведение (умножение) цифр числа num

let power = multiplicator ** 3;
console.log(power); //Полученный результат возвести в степень 3

sPow = power.toString();
console.log(sPow.substring(0, 2)); //первые 2 цифры полученного числа