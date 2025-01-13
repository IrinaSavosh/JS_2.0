//определение класса Animal
class Animal{
    constructor(name){
        this.name = name;
    }
}

//Определение классов Dog, который наследуется от класса Animal
class Dog extends Animal{
    bark(){
        console.log("Woof!");
    }
}

//создание объектов
const animal = new Animal("Animal");
const dog = new Dog("Dog");

//проверка с помощью instanceof
console.log(animal instanceof Animal); //выводит true, так как animal фвляется экземпляром класса Animal
console.log(dog instanceof Animal);//выводит true, так как dog является экземпляром класса Animal
console.log(dog instanceof Dog);//выводит true, так как dog является экземпляром класса Dog
console.log(animal instanceof Dog);//выводит false, так как animal не является экземпляром класса Dog
console.log(dog instanceof Cat);//выводит false, так как animal не является экземпляром класса Cat