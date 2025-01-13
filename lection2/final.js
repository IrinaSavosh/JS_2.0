const App = {};

class User {
  #_name;

  constructor(name) {
    this.#_name = name;
  }

  getName() {
    return this.#_name;
  }
}

App.registerUser = (name, email, password) => {
  try {
    if (!name || !email || !password) {
      throw new Error("не все данные были введены");
    }
    const user = new User(name);
    const userData = {
      name: user.getName(),
      email,
      password,
    };
    console.log("Пользователь успешно зарегистрирован:", user.getName());
    console.log("дополнитльные данные пользователя:", userData);
  } catch (error) {
    console.error("Ошибка регистрации:", error.message);
  } finally {
    console.log("Завершение регистрации пользователя");
  }
};


//вызов функции регистрации пользователя
App.registerUser('Jhon Doe', 'jhon@example.com', '1234');
App.registerUser('Jhon Smith', '45524');
