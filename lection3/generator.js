//Генератор для генерации последовательности чисел
function* numberGenerator(){
    let number = 1;

    while(true){
        yield number;
        number++;
    }
}

//Создаем экземпля генератора
const generator = numberGenerator();

//Генерируем итератор, который будет возвращать следующее число при каждом вызлве next()
console.log(generator.next().value); //1
console.log(generator.next().value); //2
console.log(generator.next().value); //3
console.log(generator.next().value); //4