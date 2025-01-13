// try {
//     undefined = 1;
// }catch{
//     console.log('Что-то произошло');
// }finally{
//     console.log('Отличный результат');
// }

// //пример: работа с делением чисел
// function divideNumbers(a,b){
//     try{
//         const result = a/b; //попытка выполнить деление
//         if(isNaN(result)){
//             throw new Error('результат не является числом');
//         }
//         console.log('Результат деления:', result);
//     }catch(error){
// console.error('ошибка деления:', error);
//     }finally{
//         console.log('Операция деления завершена');
//     }
// }

// divideNumbers(10, 2);//пример корректного деления
// divideNumbers(10, 0);//пример деления на ноль


class CustomError extends Error{
    constructor(message){
        super(message); //вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = 'CustomerError'; //установка имени ошибки
    }
}

function validateNumber(value){
    if(typeof value!=='number'){
        throw new CustomError("значение должно быть числом"); //выбрасывание пользовательской ошибки с сообщением
    }
    console.log('валидация успешна');
}

try{
    validateNumber('42') //проверка на число с передачей строки вместо числа
}catch(error){
    if(error instanceof CustomError){ //проверка, является ли ошибка экземпляром пользовательской ошибки
        console.error('Ошибка:', error.message); //вывод сообщения об ошибке
        console.log('тип ошибки:', error.name); // вывод имени ошибки
    }
    else{
        console.error('Произошла ошибка:', error);//вывод сообщения об ошибке по умолчанию
    }
}