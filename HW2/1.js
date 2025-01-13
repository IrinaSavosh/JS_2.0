/*Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/

class Library {
    #books; // Приватное свойство для хранения списка книг

    constructor(initialBooks = []) {
        // Проверка на дубликаты в начальном массиве
        const uniqueBooks = [...new Set(initialBooks)];
        if (uniqueBooks.length !== initialBooks.length) {
            throw new Error('Начальный список книг не должен содержать дубликатов.');
        }
        this.#books = uniqueBooks;
    }

    // Геттер для получения текущего списка книг
    get allBooks() {
        return this.#books;
    }

    // Метод для добавления книги
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга "${title}" уже существует в библиотеке.`);
        }
        this.#books.push(title);
    }

    // Метод для удаления книги
    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книга "${title}" не найдена в библиотеке.`);
        }
        this.#books.splice(index, 1);
    }

    // Метод для проверки наличия книги
    hasBook(title) {
        return this.#books.includes(title);
    }
}

// Пример использования
try {
    const library = new Library(['1984', 'Мастер и Маргарита']);
    console.log(library.allBooks); // ['1984', 'Мастер и Маргарита']

    library.addBook('Война и мир');
    console.log(library.allBooks); // ['1984', 'Мастер и Маргарита', 'Война и мир']

    console.log(library.hasBook('1984')); // true
    library.removeBook('1984');
    console.log(library.hasBook('1984')); // false

    // Попытка добавить книгу, которая уже существует
    try {
        library.addBook('Война и мир'); // Успешно добавляем
        console.log(library.allBooks); // ['Мастер и Маргарита', 'Война и мир']
        
        library.addBook('Война и мир'); // Ошибка, книга уже существует
    } catch (error) {
        console.error(error.message); // Ожидаемое сообщение об ошибке
    }

    // Попытка удалить несуществующую книгу
    try {
        library.removeBook('Неизвестная книга'); // Ошибка, книга не найдена
    } catch (error) {
        console.error(error.message); // Ожидаемое сообщение об ошибке
    }

} catch (error) {
    console.error(error.message);
}
