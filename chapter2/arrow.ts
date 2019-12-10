// 従来の関数宣言
function plusOne(n) {
  return n + 1;
}

// アロー関数の宣言その１
const plusOne = n => {
  return n + 1;
};

// アロー関数の宣言その２
const plusOne = n => n + 1;

// this の挙動の違い

const obj1 = {
  num: 444,
  fn: function() {
    console.log(this.num);
  }
};

const obj2 = {
  num: 888,
  fn: () => {
    console.log(this.num);
  }
};

obj1.fn(); // 444
obj2.fn(); // undefined

// デフォルトの引数
const plusOne = (n = 0) => n + 1;

console.log(plustOne(5)); // 6
console.log(plustOne()); // 1
