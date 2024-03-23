const sayHi = function () {
  console.log(`Hi I'm ${this?.name}`);
  return 
};
const person = {
  name: "Jonny",
  sayHi,
};

person.sayHi();

console.log(person.sayHi())
sayHi()