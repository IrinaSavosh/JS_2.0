// обычная функция
function regularFunction() {
  console.log(this);
}

//стрелочная функция
const arrowFunction = () => {
  console.log(this);
};

regularFunction();//выводит контекст выполнения, например, объект Window (в браузере) или объект Global (в Node.js)
arrowFunction(); // выводит контекст выполнения, котрый был определен во время создания функции (лексический контекст)


//внутри объекта
const obj = {
  regularMethod: function () {
    console.log(this);
  },
  arrowMethod: () => {
    console.log(this);
  },
};

obj.regularMethod();//выводит объект obj, так как метод вызывается на объекте obj
obj.arrowMethod();//выводит контекст выполнения, в котором была создана стрелочная функция (например, объект Window или объект Global)
