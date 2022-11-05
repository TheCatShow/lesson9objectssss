/* let a = 10;

a = 'Jon';

let obj = {
    userName: 'Jon',
    lastName: 'Jonson',
    age: 30
}

console.log(obj.userName);
console.log(obj['age']);

obj.userName = 'Jack';

console.log(obj);
console.log(obj.work);

obj.work = 'driver';
console.log(obj);

let cat = {
    catName: 'Felix',
    favoriteToy: {
        name: 'мячик', 
        size: 'маленький'
    }, 
    meow: function() {
        console.log('Мяу');
    }
}

let catName1 = 'catName';
console.log(cat[catName1]);

cat.meow();
let nameToy = cat.favoriteToy.name
console.log(nameToy);

const book = {
    title: "Основы JS"
}

const anotherBook = book;

// const anotherBook = {
//     title: "Основы JS"
// }

console.log(book === anotherBook);


//Задание 1

let obj = {
    day1: 'Понедельник',
    day2: 'Вторник',
    day3: 'Среда',
    day4: 'Четверг',
    day5: 'Пятница',
    day6: 'Суббота',
    day7: 'Воскресенье',
}

console.log(obj.day6);

//Задание 2

console.log(obj['day3']);

//Задание 3

let city1 = {
    name: 'ГородN',
    population: '10млн',
    square: '2561,5',
    city: {
        year: '1147',
        founder: 'Юрий Долгорукий',
    }
}

let cityYear = city1.city.year
console.log(cityYear);

let user = {
    name: 'John',
    lastName: 'Jonson',
    age: 30,
    work: true,
    car: {
        brand: 'toyota',
        model: 'cawry',
    }
};

console.log(user.car.brand);

let key = 'age';

delete user.work;

console.log(user);

console.log(user.name);

user.name = 'Том';

console.log(user[key]);

function makeUser(name, age) {
    return {
        name, 
        age,
    }
}

let user4 = makeUser('Jerry', 30);

console.log('work' in user);

for (let key in user) {
    console.log(user[key]);
}
*/ 

// Задание 1

let user = {
    age: 30,
    name: 'Jon',
    student: true,
    work: true,
    passport: {
        serial: 4412,
        number: 238650,
        date: '10.05.2000',
    }
};

// Задание 2

console.log(user.passport.number);

// Задание 3

delete user.student;

// Задание 5

for (let profession in user) {
    console.log(user[profession]);
}

// Задание 6
for (let key in user) {
    console.log(user[key]);
}

// Задание 7

for (let key in user) {
    console.log(user[key]);
}