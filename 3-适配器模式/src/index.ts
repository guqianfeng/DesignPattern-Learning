class Hole {
  constructor (
    public radius: number
  ) {}

  getRadius () {
    return this.radius;
  }

  fit (roundPeg: RoundPeg | RectPegAdapter) {
    return this.getRadius() >= roundPeg.getRadius();
  }
}

class RoundPeg {
  constructor (
    public radius: number
  ) {}
  getRadius () {
    return this.radius;
  }
}

class RectPeg {
  constructor (
    public width:number
  ) {}

  getWidth () {
    return this.width;
  }
}

class RectPegAdapter {
  constructor(public rectPeg: RectPeg){}
  getRadius () {
    return this.rectPeg.getWidth() * Math.sqrt(2) / 2;
  }
}

let hole = new Hole(3);
let roundPeg1 = new RoundPeg(3);
let roundPeg2 = new RoundPeg(4);
// console.log(hole.fit(roundPeg1));
// console.log(hole.fit(roundPeg2));

let rectPeg1 = new RectPeg(4);
let rectPeg2 = new RectPeg(10);
// 报错
// console.log(hole.fit(rectPeg1))
// console.log(hole.fit(rectPeg2))

let rectPegAdapter1 = new RectPegAdapter(rectPeg1);
let rectPegAdapter2 = new RectPegAdapter(rectPeg2);
console.log(rectPegAdapter1.rectPeg, rectPegAdapter1.getRadius())
console.log(rectPegAdapter2.rectPeg, rectPegAdapter2.getRadius())
console.log(hole.fit(rectPegAdapter1))
console.log(hole.fit(rectPegAdapter2))



