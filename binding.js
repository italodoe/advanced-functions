const sayHi = function () {
  console.log(`${this.name} is real`);
};

const person = {
  name: "Daniel",
  sayHi: function () {
    console.log(`${this.name} isn't real`);
  },
};

const person2 = {
  name: "Keanu",
  sayHi: function () {
    console.log(`${this.name} is real`);
  },
};

person.sayHi();

const f = person.sayHi;
// f();

const isntReal = person.sayHi.bind(person);
const kisntReal = person.sayHi.bind(person2);
const isReal = sayHi.bind(person2);
isntReal();
kisntReal();
isReal();
