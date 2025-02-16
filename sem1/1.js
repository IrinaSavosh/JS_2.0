// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы, рейтинги, теги
// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на консоль.

// Функции для добавления метаданных к объектам

function addMetadata(book, metadataType,data){
   book[metadataType] = data;
}

//Функция для извлечения метаданных из объекта

function getMetadata(book, metadataTypea){
   return book[metadataTypea];
}

//Создание объекта книги и добавление метаданных
const book = {
   title: "1984",
   author: "Geoge Orwell"
}

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

addMetadata(book,reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book,ratingSymbol, 5);
addMetadata(book,tagsSymbol, "dystopia");

//Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));