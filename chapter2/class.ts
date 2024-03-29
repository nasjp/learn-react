// class
class Bird {
  constructor(name) {
    this.name = name;
  }

  chirp() {
    console.log(`${this.name}が鳴きました`);
  }

  static explain(name) {
    console.log(`${this.name}は翼があって卵を生みます`);
  }
}

class FlyableBird extends Bird {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name}が飛び出ました`);
  }
}

const bd1 = new Bird("ペンギン");
bd1.chirp(); // ペンギンが鳴きました
Bird.explain("カラス"); // カラスは翼があって卵を生みます

const bd2 = new FlyableBird("スズメ");
bd2.fly(); // スズメバチが飛び出ました
