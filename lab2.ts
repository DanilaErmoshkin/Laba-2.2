// Функция для нахождения максимального числа в массиве вещественных чисел
function findMaxNumber(numbers: number[]): number | null {
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
} else {
    console.log("Массив пустой.");
}
// Функция для проверки наличия отрицательных чисел в матрице
function hasNegativeNumber(matrix: number[][]): boolean {
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
} else {
    console.log("В матрице нет отрицательных чисел.");
}
// Определяем тип для кортежа, содержащего только 3 числовых значения
type NumberTuple = [number, number, number];

// Функция для создания кортежа
function createNumberTuple(a: number, b: number, c: number): NumberTuple {
    return [a, b, c];
}

// Пример использования
const myTuple: NumberTuple = createNumberTuple(10, 20, 30);

// Выводим значения кортежа
console.log(`Кортеж: [${myTuple[0]}, ${myTuple[1]}, ${myTuple[2]}]`);
// Определяем перечисление для типов мячей
enum BallType {
    Football = "Футбольный мяч",
    Basketball = "Баскетбольный мяч",
    TennisBall = "Теннисный мяч",
    Volleyball = "Волейбольный мяч",
    Baseball = "Бейсбольный мяч",
}

// Пример использования перечисления
const myBall: BallType = BallType.Basketball;

// Выводим тип мяча в консоль
console.log(`Выбранный тип мяча: ${myBall}`);
class Pet {
    name: string = 'Some pet';
    age: number = -1;

    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;

    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak() {
        return "Miyau!";
    }
}

// Обобщенный метод для вывода информации о питомцах
function printPetInfo<T extends Pet>(pet: T): void {
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
enum PetType {
    Dog = "Dog",
    Cat = "Cat",
    Fish = "Fish",
}

interface Pet {
    name: string;
    age: number;
    type: PetType;
    speak(): string;
}

const myPet: Pet = {
    name: "Barsik",
    age: 2,
    type: PetType.Cat,
    speak: function () {
        return "Miyau!";
    },
};

// Выводим объект в формате JSON
console.log(JSON.stringify(myPet, null, 2));
