// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)


// Определяем структуру альбома
const album1 = {
   title: "Abbey Road",
   artist: "The Beatles",
   year: 1969
};

const album2 = {
   title: "Dark Side of the Moon",
   artist: "Pink Floyd",
   year: 1973
};

const album3 = {
   title: "Thriller",
   artist: "Michael Jackson",
   year: 1982
};

// Создаем объект музыкальной коллекции
const musicCollection = {
   albums: [album1, album2, album3],
   
   // Реализуем Symbol.iterator
   [Symbol.iterator]: function() {
       let index = 0;
       const albums = this.albums;

       return {
           next: function() {
               if (index < albums.length) {
                   return { value: albums[index++], done: false };
               } else {
                   return { done: true };
               }
           }
       };
   }
};

// Используем цикл for...of для перебора альбомов
for (const album of musicCollection) {
   console.log(`${album.title} - ${album.artist} (${album.year})`);
}
