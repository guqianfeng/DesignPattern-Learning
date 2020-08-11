// 观察者模式
class Publisher {
  constructor () {
    this.observers = []
  }
  add (observer) {
    this.observers.push(observer)
  }

  remove (observer) {
    let index = this.observers.findIndex(item => item == observer);
    this.observers.splice(index, 1);
  }

  notify () {
    this.observers.forEach(observer => {
      observer.update(this);
    })
  }
}

class Observer {
  update () {
    console.log('update')
  }
}

class PrdPublisher extends Publisher {
  constructor () {
    super();
    this.observers = []
    this.prd = null
  }
  getPrd () {
    return this.prd
  }
  setPrd (prd) {
    this.prd = prd;
    this.notify();
  }
}

class Worker extends Observer {
  constructor (name) {
    super();
    this.prd = null;
    this.name = name;
  }
  work () {
    const prd = this.prd;
    if (prd) {
      console.log(prd, this.name, '996 begin')
    }
  }
  update (publisher) {
    this.prd = publisher.getPrd();
    this.work();
  }
}

let productManager = new PrdPublisher();
let front = new Worker("前端");
let backend = new Worker("后端");
let test = new Worker("测试");
// 加群
productManager.add(front);
productManager.add(backend);
productManager.add(test);
let prd = {
  title: "新需求"
}
// productManager.remove(test);
// 发需求到群里
productManager.setPrd(prd);

console.log("--------------------------分割线--------------------------")

// 发布订阅模式