// // Пример 1: Установка и получение значения из localStorage

// //Установка значения в localStorage
// localStorage.setItem("username", "Jhon");

// //Получение значения из localStorage
// let storedUsername = localStorage.getItem("username");
// console.log("Значение из localStorage:", storedUsername);

//Удаление
//Удаление значения из localStorage
// localStorage.removeItem('username');

//Проверка, что значение удалено
// let storedUsername2 = localStorage.getItem('username');
// console.log('Значение из localStorage:', storedUsername2);

// //Очистка localStorage
localStorage.clear();

// //Проверяем, что localStorage пустой
// console.log("localStorage:", localStorage);

//Проверяем, есть ли значение счетчика в localStorage
if (localStorage.getItem("counter")) {
  //Если значение счетчика уже есть, увеличиваем его на 1
  let counter = parseInt(localStorage.getItem("counter")) + 1;
  localStorage.setItem("counter", counter.toString());
} else {
  //Если значение счетчика не существует, устанавливаем его в 1
  localStorage.setItem("counter", "1");
}

//вЫВОДИМ ЗНАЧЕНИЕ СЧЕТЧИКА В КОНСОЛЬ
console.log("Счетчик посещений:", localStorage.getItem("counter"));

//Проверяем, есть ли значение счетчика в localStorage
let counter = localStorage.getItem("counter")
  ? parseInt(localStorage.getItem("counter"))
  : 0;

// Обновляем значение счетчика и сохраняем его в localStorage
const updateCounter = () => {
  counter++;
  localStorage.setItem("counter", counter.toString());
};

//Выводим текущее значение счетчика на страницу
document.querySelector(".counter").textContent = counter;

//Обработчик собятия для кнопки "Увеличить счетчик"
document.querySelector(".increment").addEventListener("click", () => {
  updateCounter();
  document.querySelector(".counter").textContent = counter;
});



