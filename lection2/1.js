//опцииональная цепочка вызовов методов и оператор нулевого слияния
//Объект с информацией о пользователе
const user = {
    name: 'Jhon',
    age: 30,
    address: {
        city: 'New York',
        street: '123 Main St'
    },
    contacts:{
        email:"jhon@exaple.com",
        phone:'+1234567890'
    }
};

//Опциональная цепочка вызовов методов
const email = user?.contacts?.email;
console.log(email);

//если значение не определено или равно null или undefained, используется значение по умолчанию
const defaultValue = user?.otherValue ?? 'Default Vafue';
console.log(defaultValue); //выводит 'Default Vafue', так как свойство otherValue не существует в объекте user

//опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user?.address?.street ?? 'Unknow';
console.log(streetName); //выводит '123 Main St', так как свойство street существует в объекте user.address