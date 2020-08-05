class Singleton {
  static instance = null
  constructor(
    public x: number,
    public y: string
  ) {

  }
  static getInstance (x: number, y: string) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(x, y)
    }
    return Singleton.instance
  }
  show (): void {
    console.log('show', this.x, this.y)
  }
  setX (value: number): void {
    this.x = value
  }
}

// let s1 = new Singleton
// let s2 = new Singleton
// console.log(s1 == s2)

let s1 = Singleton.getInstance(1, '1');
let s2 = Singleton.getInstance(2, '2');
console.log(s1 == s2)
s1.setX(999)
s1.show()
s2.show()