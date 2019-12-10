/* const wakeUp = ms => { */
/*   setTimeout(() => { */
/*     console.log("起きた"); */
/*   }, ms); */
/* }; */

/* const greet = () => { */
/*   console.log("おやすみ"); */
/*   wakeUp(2000); */
/*   console.log("おはよう！"); */
/* }; */

/* greet(); */

// Promise
/* const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)); */

/* const greet = () => { */
/*   console.log("おやすみ"); */

/*   sleep(2000) */
/*     .then(() => { */
/*       console.log("起きた"); */
/*       console.log("おはよう！"); */
/*     }) */
/*     .catch(err => { */
/*       console.error("睡眠例外です:", err); */
/*     }); */
/* }; */

/* greet(); */

// async/await
// async/await はPromie構文のシンタックスシュガー
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const greet = async () => {
  console.log("おやすみ");

  try {
    await sleep(2000);
    console.log("起きた");
    console.log("おはよう！");
  } catch (err) {
    console.error("睡眠例外です:", err);
  }
};

greet();
