let n: number = 3;
/* n = "foo"; */

if (n) {
  console.log("`n` is true");
}

/* n = null; */

// 型推論
let s = "foo";

console.log(typeof s); // string

// 共有体型(union)
let i: number | null = 1;

i = null;

let some: number | string | undefined = "bar";
some = 50;
some = undefined;

let pet: "cat" | "dog" | "rabbit" = "dog";
pet = "cat";
/* pet = "hamster"; */
// [eval].ts(4,1): error TS2322: Type '"hamster"' is not assignable to type '"cat" | "dog" | "rabbit"'

// any 型
// 使ったら負け
let val: any = 100;

val = "buz";

val = null;

// never 型
// 何も代入できない
const greet = (friend: "serval" | "caracal" | "cheetah") => {
  switch (friend) {
    case "serval":
      return "Hello, Serval!";
    case "caracal":
      return "Hello, Caracal!";
    case "cheetah":
      return "Hello, Cheetah!";
    default:
      const check: never = friend;
  }
};

console.log(greet("serval")); // Hello, Serval!
