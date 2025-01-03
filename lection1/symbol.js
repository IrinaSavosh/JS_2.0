// const symbol = Symbol(); //объявление

// const dogID = Symbol("dog"); // значение уникально, даже если мы создадим несколько символов с одинаковым описанием

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1);
// console.log(dog2);

// console.log(dog1 == dog2); //false

// const dogID = Symbol("dog");
// alert(dogID) //TypeError: Cannot convert a Symbol value to a string
// console.log(dogID); //Symbol(dog)

// console.log(dogID.description); //dog можно посмотерть описание

// let id = Symbol('dogID');

// let id = Symbol('id');
// let buddy = {
//    [id]: 'Жучка'
// }

// console.log(buddy[id]); //Жучка

// buddy[id] = "Бобик"; //Идентификаторы создаются уникальными всегда
// console.log(buddy[id]); //После перезаписи - Бобик

// //Проблемы, которые могут возникнуть без использования Symbol
// let buddy = {name: 'Тузик'}; //Объявляем в нашем скрипте свойство 'id'
// buddy.id = 'Наш идентификатор'; //...другой скрипт тоже хочет свой идентификатор...
// buddy.id = 'Их идентификатор'; //Ой, свойство перезаписано сторонней библиотекой!

// console.log(buddy.id);

// //Как решить?

// let buddies = {
// 	[Symbol("Жучка")]: "Жучка",
// 	[Symbol("Мурка")]: "Мурка",
// 	[Symbol("Таракашка")]: "Таракашка",
// 	elephant: "Слон",
// };

// console.log(buddies);

// let newBuddies = {};
// Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в том чисте и символьные.

// buddies.cat = 'Барсик';

// console.log(newBuddies);
// console.log(buddies);


// // ---- Symbol.for ----

// // читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // если символ не существует, он будет создан

// // читаем его снова и записываем в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for('id');


// // проверяем: это один и тот же символ
// alert(id ===idAgain); //true

// // ---- Symbol.keyFor ----  описание символа по идентификатору
// // получаем символ по имени
// let sym = Symbol.for('name');
// let sym2 = Symbol.for('id');

// // получаем имя по символу
// console.log(Symbol.keyFor(sym)); // name
// console.log(Symbol.keyFor(sym2)); // id