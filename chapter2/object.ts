const [n, m] = [1, 4];
console.log(n, m); // 1 4

const obj = { name: "Kanae", age: 24 };
const { name, age } = obj;
console.log(name, age); // kanae 24

// スプレッド演算子
const arr1 = ["A", "B", "C"];
const arr2 = [...arr1, "D", "E"];
console.log(arr2);

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, d: 4, e: 5 };
console.log(obj2);
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4, e: 5}

const foo = 65536;
const obj3 = { foo, bar: 4096 };
console.log(obj3); // { foo: 65536, bar: 4096 }
