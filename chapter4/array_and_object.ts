// 配列とオブジェクト

// こっちを推奨
const arr1: number[] = [1, 2, 3];

const arr2: Array<number> = [1, 2, 3];

const john: { name: string; age: number } = { name: "John", age: 25 };

interface User {
  name: string;
  age?: number;
}

const jane: User = { name: "Jane", age: 27 };
const Jack: User = { name: "Jack" };

type Person = User;
const rick: Person = { name: "Rick", age: 31 };

// 型同士の合成
// &がよく使われる
interface Foo {
  hoge?: number;
  fuga: string;
}

interface Bar {
  hoge: number;
}

interface Buz {
  piyo: string;
}

type FooBar1 = Foo & Bar; // { hoge: number, fuga: string }
type FooBar2 = Foo | Bar; // { hoge?: number, fuga: string  } or { hoge: number }
type FooBuz1 = Foo & Buz; // { hoge?: number, fuga: string, piyo: string }
type FooBuz2 = Foo | Buz; // { hoge?: number, fuga: string } or { piyo: string }
type BarFooBuz = Bar & (Foo | Buz); // { hoge: number, fuga: string  } or { hoge: number, piyo: string }

// 注意すべきこと

// const宣言でも各要素への上書きとか追加はできる
const arr = [1, 2, 3];
arr[0] = 7;
console.log(arr); // [ 7, 2, 3 ]

const obj = { a: 1, b: 2 };
obj.b = 5;
console.log(obj); // { a: 1, b: 5 }

// readonly 型で完全なimmutableにできる
const arr3: ReadonlyArray<string> = ["foo", "bar"];
const arr4: readonly string[] = ["foo", "bar"];

// できない
/* arr3[0] = "buz"; */
/* arr4[0] = "buz"; */

const obj1: Readonly<{ foo: number }> = { foo: 2 };

// できない
/* obj1.foo = 8; */

// 現在はインデックスを直に変更するのでなく、スプレッド演算子を使うべき
const obj2 = { red: "ff0000", green: "00ff00" };
const newObj2 = { ...obj2, green: "00ee00", blue: "0000ff" };
console.log(newObj2); // { red: 'ff0000', green: '00ee00', blue: '0000ff'  }
