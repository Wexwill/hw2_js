    // Task 1

let name = prompt('Ваше имя'),
    age = prompt('Возраст'),
    phone = prompt('Телефон'),
    city = prompt('Город проживания'),
    email = prompt('email'),
    company = prompt('В какой компании работаете');

document.write('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone +' , ' + email +'.');

    // Task 2

let year = 2020 - age;

document.write('<br \/>' + name + ' родился в ' + year + ' году.');

    // Task 3

let number = '123123';

console.log('Task 3');
console.log(number, typeof number);
  
if (+number[0] + +number[1] + +number[2] == +number[3] + +number[4] + +number[5]) {
    console.log('Да');
} else {
    console.log('Нет');
}

console.log('');

    // Task 4

let a = prompt('Введите значение переменной а.');

console.log('Task 4');
console.log(a);

if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

console.log('');

    // Task 5

let A = 10,
    B = 2,
    summ = A + B,
    razn = A - B,
    proizv = A * B,
    chastnoe = A / B;

console.log('Task 5');
console.log(summ);
console.log(razn);
console.log(proizv);
console.log(chastnoe);

if (summ > 1) {
    console.log(summ * summ);
}

console.log('');

    // Task 6

console.log('Task 6');

if (A > 2 && A < 11 || B >= 6 && B < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

console.log('');

    // Task 7

let n = prompt('Введите значение переменной n от 0 до 59.');

console.log('Task 7');
console.log(n + ' Минут');

if (n >= 0 && n < 15) {
    console.log('Первая четверть');
} else if (n >= 15 && n < 30) {
    console.log('Вторая четверть');
} else if (n >= 30 && n < 45) {
    console.log('Третья четверть');
} else {
    console.log('Четвертая четверть');
}

console.log('');

    // Task 8

let day = prompt('Введите день от 1 до 31.');

console.log('Task 8');
console.log(day + ' День');
    
if (day > 0 && day < 10) {
    console.log('Первая декада');
} else if (day >= 11 && day < 20) {
    console.log('Вторая декада');
} else {
     console.log('Третья декада');
}
    
console.log('');

    // Task 9

let Day = prompt('Введите день (например 1342)'),
    Year = +Day / 365,
    Month = Day / 31,
    Week = Month * 4,
    Hour = Week * 168,
    Minutes = Hour * 60,
    Seconds = Minutes * 60;

console.log('Task 9');
console.log(Day + ' Дней');
console.log(Year + ' Лет');
console.log(Month + ' Месяцев');
console.log(Week + ' Недель');
console.log(Hour + ' Часов');
console.log(Minutes + ' Минут');
console.log(Seconds + ' Секунд');
console.log('');

    // Task 10

let day1 = prompt('Введите день года от 1 до 365');

console.log('Task 10');
console.log(day1 + ' День');

if (day1 >= 1 && day1 <= 31) {
    console.log('Январь');
    month1 = 1;
} else if (day1 > 31 && day1 <= 60) {
    console.log('Февраль');
    month1 = 2; 
} else if (day1 > 60 && day1 <= 91) {
    console.log('Март');
    month1 = 3;
} else if (day1 > 91 && day1 <= 121) {
    console.log('Апрель');
    month1 = 4;
} else if (day1 > 121 && day1 <= 152) {
    console.log('Май');
    month1 = 5;
} else if (day1 > 152 && day1 <= 182) {
    console.log('Июнь');
    month1 = 6;
} else if (day1 > 182 && day1 <= 213) {
    console.log('Июль');
    month1 = 7;
} else if (day1 > 213 && day1 <= 244) {
    console.log('Август');
    month1 = 8;
} else if (day1 > 244 && day1 <= 274) {
    console.log('Сентябрь');
    month1 = 9;
} else if (day1 > 274 && day1 <= 305) {
    console.log('Октябрь');
    month1 = 10;
} else if (day1 > 305 && day1 <= 335) {
    console.log('Ноябрь');
    month1 = 11;
} else if (day1 > 335 && day1 <= 366) {
    console.log('Декабрь');
    month1 = 12;
}

switch (month1) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
    break;
    case 3:
    case 4: 
    case 5: 
        console.log('Весна');
    break;  
    case 6:
    case 7:        
    case 8:
        console.log('Лето');
    break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
    break;
}






