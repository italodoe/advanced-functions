const existsIndex = (array, index) => !(typeof array[index] === "undefined");

const a = [0, 1, 2, 3, 4, 5, 9, 8, 7, 6];

// console.log(a.fill(parseInt(Math.random()*100), 0 ,5))

const b = a.map((x) => x * 2);

console.log(b);

const c = a.filter((x) => !(x % 2));

console.log(c);

const d = a.map((item, index) => ({ index: item }));
console.log(d);

a[0] = null;

console.log(a[0]);
console.log(d[0]);

const pla7 = (n, idx, array_) =>
  existsIndex(array_, idx + 1) && array_[idx + 1] % 2 ? "" + n : n;
console.log(a.map(pla7));

const find = a.find((x) => x > 5);
console.log(find);
console.log(a.indexOf(find));
