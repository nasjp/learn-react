const multi = (n, m) => n * m;

console.log(multi(2, 4)); // 8

// カリー化
const curriedMulti = n => {
  return m => n * m;
};

console.log(multi(2)(4)); // 8

const simpleCurriedMulti = n => m => n * m;
console.log(simpleCurriedMulti(2)(4)); // 8

// 関数の部分適用
const multi = n => m => n * m;
const triple = multi(3);
console.log(triple(5));
