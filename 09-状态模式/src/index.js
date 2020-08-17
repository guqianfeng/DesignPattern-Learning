class CoffeeMake {
  constructor () {
    this.type = "init";
    this.milk = "milk 500ml";
  }
  coffeeType = {
    that: this,
    american () {
      console.log(this.that.type)
      console.log(this.that.milk)
      console.log("只有黑咖啡")
    },
    latte () {
      this.american();
      console.log("加奶")
    },
    vanillaLatte () {
      this.latte();
      console.log("加香草糖浆")
    },
    mocha () {
      this.latte();
      console.log("加巧克力")
    }
  }
  changeType (type) {
    this.type = type;
    if (!this.coffeeType[type]) {
      return;
    }
    this.coffeeType[type]();
  }
}

let coffeeMake = new CoffeeMake();
coffeeMake.changeType("vanillaLatte");