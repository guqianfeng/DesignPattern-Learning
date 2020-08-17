abstract class HumbergerFactory {
  abstract createMeat (): void;
  abstract createSauce  (): void;
}
abstract class MeatFactory {
  abstract setMeat (): void;
}
abstract class SauceFactory {
  abstract setSauce (): void;
}

class Beef extends MeatFactory {
  setMeat () {
    console.log('加入牛肉')
    return true
  }
}

class Pork extends MeatFactory {
  setMeat () {
    console.log('加入猪肉')
    return true
  }
}

class Salad extends SauceFactory {
  setSauce () {
    console.log('加入色拉酱')
    return true
  }
}

class Chili extends SauceFactory {
  setSauce () {
    console.log('加入辣椒酱')
    return true
  }
}

class ChiliBeafHamburger extends HumbergerFactory {
  createMeat () {
    return new Beef()
  }
  createSauce () {
    return new Chili()
  }
}

let chiliBeafHamburger = new ChiliBeafHamburger();
let meat = chiliBeafHamburger.createMeat();
let sauce = chiliBeafHamburger.createSauce();
console.log(meat.setMeat())
console.log(sauce.setSauce())