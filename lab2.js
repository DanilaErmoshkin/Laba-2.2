"use strict";
// Функция для нахождения максимального числа в массиве вещественных чисел
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null; // Возвращаем null, если массив пустой
    }
    let maxNumber = numbers[0]; // Инициализируем максимальное число первым элементом массива
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]; // Обновляем максимальное число, если найдено большее
        }
    }
    return maxNumber; // Возвращаем найденное максимальное число
}
// Пример использования
const numbersArray = [1.5, 2.3, 4.7, 3.6, 0.9];
const maxNumber = findMaxNumber(numbersArray);
if (maxNumber !== null) {
    console.log(`Максимальное число: ${maxNumber}`);
}
else {
    console.log("Массив пустой.");
}
// Функция для проверки наличия отрицательных чисел в матрице
function hasNegativeNumber(matrix) {
    for (let row of matrix) {
        for (let number of row) {
            if (number < 0) {
                return true; // Возвращаем true, если найдено отрицательное число
            }
        }
    }
    return false; // Возвращаем false, если отрицательных чисел нет
}
// Пример использования
const integerMatrix = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];
const containsNegative = hasNegativeNumber(integerMatrix);
if (containsNegative) {
    console.log("В матрице есть хотя бы одно отрицательное число.");
}
else {
    console.log("В матрице нет отрицательных чисел.");
}
// Функция для создания кортежа
function createNumberTuple(a, b, c) {
    return [a, b, c];
}
// Пример использования
const myTuple = createNumberTuple(10, 20, 30);
// Выводим значения кортежа
console.log(`Кортеж: [${myTuple[0]}, ${myTuple[1]}, ${myTuple[2]}]`);
// Определяем перечисление для типов мячей
var BallType;
(function (BallType) {
    BallType["Football"] = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Basketball"] = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["TennisBall"] = "\u0422\u0435\u043D\u043D\u0438\u0441\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Volleyball"] = "\u0412\u043E\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Baseball"] = "\u0411\u0435\u0439\u0441\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
})(BallType || (BallType = {}));
// Пример использования перечисления
const myBall = BallType.Basketball;
// Выводим тип мяча в консоль
console.log(`Выбранный тип мяча: ${myBall}`);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
// Обобщенный метод для вывода информации о питомцах
function printPetInfo(pet) {
    console.log(`Pet Info:`);
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
}
// Примеры создания объектов и вывода информации
const myDog = new Dog();
const myCat = new Cat();
printPetInfo(myDog);
printPetInfo(myCat);
var PetType;
(function (PetType) {
    PetType["Dog"] = "Dog";
    PetType["Cat"] = "Cat";
    PetType["Fish"] = "Fish";
})(PetType || (PetType = {}));
const myPet = {
    name: "Barsik",
    age: 2,
    type: PetType.Cat,
    speak: function () {
        return "Miyau!";
    },
};
// Выводим объект в формате JSON
console.log(JSON.stringify(myPet, null, 2));
