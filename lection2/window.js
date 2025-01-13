// console.log(window);

// const newWindow = window.open('https://www.example.com', '_blank'); //открывает новое окно браузера
// window.close() //закрываем текущее окно
// window.resizeTo(800, 600); //изменяет размер окна на 800х600 пикселей
// window.location.href='https://www.example.com'//перенаправляет на другую страницу
// const windowWidth = window.innerWidth //получаем ширину окна
// console.log(windowWidth);

//Работа с window.window - все то же самое, что и с window

//Работа с self
// const newWindowSelf = self.open('https://www.example.com', '_blank');
// - тоже самое, что и с window: вместо window self

//работа с frames
// const frame = frames[0]; //получает ссылку на фрейм по индексу
// frames[0].location.href = 'https://www.example.com' //опять же перенаправляет на другую страницу
// const frameCount = frames.length; //получает количество фреймов на странице
// const parentWindow = window.parent; /получает доступ к родительскому окну из фрейма

//работа с globalThis
// const globalObject = globalThis; //получает глобальный объект
// globalThis.newVarieble ='Hello, world!'; //определяет новую глобальную переменную
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; //получает доступ к глобальным переменным из разных сред исполнения

//var
// var glob = 5;
// function increment (val){
//    return val +1;
// }
// console.log(window.glob); //5
// console.log(window.increment); //2


//alert
// console.log(alert() === window.alert()); //true

// alert("можно так");
// window.alert('А можно и так');

// //const let
// const local = 5;
// let localFunc = () =>'LocalFunc';
// console.log(local); //5
// console.log(localFunc()); //localFunc
// console.log(window.local);  //undefined
// console.log((window.localFunc)); //undefined

// из прошлой части
console.log(window.Symbol.for); //ƒ for() { [native code] }
console.log(window.Symbol.iterator); //Symbol(Symbol.iterator)
console.log(window.Array.from); //ƒ from() { [native code] }