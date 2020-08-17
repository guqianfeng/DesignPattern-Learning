class Cat {
  constructor(
    public name: string
  ) {}

  shout () {
    console.log(this.name + "喵喵喵")
  }
}

let cat = new Cat('Tom')
cat.shout()

class DecoratorCat {
  constructor (
    public cat: Cat
  ) {}
  shout () {
    this.lovely();
    this.cat.shout();
  }
  lovely () {
    console.log("叫之前还要卖个萌")
  }
}

console.log("---------------------")

let cat_ = new DecoratorCat(cat)
cat_.shout()