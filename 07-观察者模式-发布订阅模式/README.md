# 观察者模式-发布订阅模式

## 开始玩耍

* 产品经理与前后端测试的故事

```js
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
```

* 直播平台之主播与粉丝的故事

```js
class EventBus {
  constructor () {
    this.handlers = {}
  }
  on (eventName, fn) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(fn)
    // console.log(this.handlers[eventName], fn)
  }

  off (eventName, fn) {
    // console.log(eventName, fn);
    let fns = this.handlers[eventName];
    let index = fns.findIndex(item => item == fn);
    if (index != -1) {
      fns.splice(index, 1);
    }
  }

  emit (eventName, ...args) {
    this.handlers[eventName] && this.handlers[eventName].forEach(cb => {
      cb(...args);
    })
  }

  once (eventName, fn) {
    const wrap = (...args) => {
      fn.apply(...args);
      this.off(eventName, wrap);
    }
    this.on(eventName, wrap);
  }
}

const zhibopingtai = new EventBus()

// 主播1
zhibopingtai.on("mengrourou", function () {
  console.log("萌肉肉粉丝1号来啦")
})
zhibopingtai.on("mengrourou", function () {
  console.log("萌肉肉粉丝2号来啦")
})
function fensi3 () {
  console.log("萌肉肉粉丝3号来啦")
}
zhibopingtai.on("mengrourou", fensi3)
// zhibopingtai.off("mengrourou", fensi3)

zhibopingtai.emit("mengrourou");

console.log("--------------------------主播分割线--------------------------")

// 主播2
zhibopingtai.on("meirourou", function () {
  console.log("美肉肉粉丝1号来啦")
})
zhibopingtai.on("meirourou", function () {
  console.log("美肉肉粉丝2号来啦")
})
zhibopingtai.once("meirourou", function () {
  console.log("美肉肉粉丝3号假粉来啦")
})
zhibopingtai.emit("meirourou");

console.log("--------------------------美肉肉再次直播的时候--------------------------")
zhibopingtai.emit("meirourou");
```
