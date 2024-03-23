let suma = function (a, b) {
  return a + b;
};

let operators = {
    '+': function(a, b) {
        return a+b;
    },
    '-': function(a, b) {
        return a-b;
    },
    '*': function(a, b) {
        return a*b;
    },
    '/': function(a, b) {
        return a/b;
    },
};

console.log(suma(5, 6));
console.log(operators['+'](5, 6));
console.log(operators['*'](5, 6));
console.log(operators['-'](5, 6));
console.log(operators['/'](5, 6));



const functionMaker = function(x){
    return function(a, b){
        return operators[x](a, b)
    };
};

console.log( functionMaker('+')(3, 5) )