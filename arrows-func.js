const suma = function (a, b) {
  return a + b;
};

//arrow =>

const sumaArrow = (a, b) => a + b;

const givMeMoney = (max) => parseInt(Math.random() * 1000) % max;

console.log(givMeMoney(333));

const person = {
  name: "Jane",
  sayHi: () => console.log(`Hey there is a ${this.name}`),
};

person.sayHi();

const makePerson = (name, age) => ({ name, age });

console.log(makePerson("Saitoshi", 66));
