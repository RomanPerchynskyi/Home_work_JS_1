// 1) написать программу, которая считывает через prompt число
//  и выводит фразу "четное" или "нечетное" в зависимости от числа.
const value = +prompt('Укажите число');

console.log(`${value} / 2`);

if( value % 2 ===0){
    console.log('Четное')
}else{
    console.log('Нечетное')
}


// 2) написать программу, которая считывает два числа и выводит "делится"
//  или "не делится" в зависимости от того,
//  делится первое число на второе или нет.
const value_1 = +prompt('Укажите число');
const value_2 = +prompt('Укажите число');

console.log(`${value_1} / ${value_2} `);
if( value_1 % value_2 ===0){
    console.log('Делится');
}else{
    console.log('Не делится');
}

// 3) написать программу, которая считывает стороны прямоугольного треугольника
//   и выводит его площадь.Для вычисления площади прямоугольного треугольника я пользовался формулой Герона:
const a = +prompt('Укажите длинну стороны');
const b = +prompt('Укажите длинну стороны');
const c = +prompt('Укажите длинну стороны');
const p = a + b + c ;
const ph = p/2;

console.log(`${(ph* (ph - a)*(ph - b)*(ph - c))**0.5}`);


// 4) написать программу, которая получает длины катетов
//  прямоугольного треугольника и выводит гипотенузу.

const a = +prompt('Укажите длинну катета');
const b = +prompt('Укажите длинну катета');

console.log(`${((a**2+b**2)**(1/2))}`);


// 5) написать программу, которая получает число.
//  Если оно делится на 3 или на 7 без остатка или делится на 10 с остатком,
//  то выведите "YES" в ином случае "NO".

const value = +prompt('Укажите число');

if( value % 3 === 0 && value % 7 === 0 && value % 10 != 0){
        console.log('Yes');
    }else{
        console.log('NO');
    }