// 関数の型定義
const add = (n: number, m: number): number => n + m;
console.log(add(1, 3)); // 4

function subtr(n: number, m: number): number {
  return n - m;
}
console.log(subtr(5, 4)); // 1

const hello = (): void => {
  console.log("Hello!");
};

hello(); // Hello!

const aloha = () => "Aloha!";
type Greeting = ReturnType<typeof aloha>;
const chao = (): Greeting => "Chao!";
console.log(chao()); // Chao!
