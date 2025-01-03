// let map = new Map();

// map.set('1', 'str1'); // строка в качестве ключа
// map.set(1, 'num1'); //цифра как ключ
// map.set(true, 'bool1'); //будево значение как ключ

//помните,обычный объект Object приводит ключи к строкам?
//Map сохраняет тип ключей, так что в этом случае соранится 2 разных значения:
// console.log(map.get(1));//num1
// console.log(map.get('1')); //str1
// console.log(map.size); //3

// //get set

// let map = new Map();

// map.set('1', 'We'); // строка в качестве ключа
// map.set(1, 'likes'); //цифра как ключ
// map.set(true, 'JS');

// console.log(map);

//перебор коллекций map

// let recipeMap = new Map([
// 	["огурец", 500],
// 	["помидор", 350],
// 	["лук", 50],
// ]);

// console.log(recipeMap);

// // перебор по ключам

// for (let vegetable of recipeMap.keys()) {
// 	console.log(vegetable);
// }

// // перебор по значениям ключа
// for (let amount of recipeMap.values()) {
// 	console.log(amount);
// }

// // перебор по элементам в формате ключ-значение
// for (let entry of recipeMap) {
// 	console.log(entry);
// }

// // выполняем функцию для каждой пары (ключ-значение)
// recipeMap.forEach ((value, key, map) =>{
// 	console.log(`${key}: ${value}`);
// });


//работа с объектами

// // Object.entries поможет создать Map:
// let map = new Map(Object.entries(obj));

// //Object.fromEntries поможет создать объект и Map
// let obj = Object.fromEntries(map);



//----- Set -----
let buddies = [
   "Жучка",
   "Тузик",
   "Булька",
   "Тузик",
   "Бобик",
   "Жучка",
   "Валера",
   "Жучка",
   "Тузик",
   "Манька"
];

let uniqueBuddies = new Set(buddies);

console.log(uniqueBuddies);

//Перевести обратно в массив нам поможет метод Array.from
let arr = Array.from(uniqueBuddies);
console.log(arr);