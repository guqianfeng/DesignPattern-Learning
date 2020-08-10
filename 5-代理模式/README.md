# 代理模式

## 源码

* 事件代理
```js
let oUl = document.querySelector("ul");
oUl.onclick = function(e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerHTML);
  }
}
```

* 虚拟代理
```js
class PreLoadImage {
  constructor(imgNode) {
      // 获取真实的DOM节点
      this.imgNode = imgNode
  }
   
  // 操作img节点的src属性
  setSrc(imgUrl) {
      this.imgNode.src = imgUrl
  }
}

class ProxyImage {
  // 占位图的url地址
  static LOADING_URL = 'xxxxxx'

  constructor(targetImage) {
      // 目标Image，即PreLoadImage实例
      this.targetImage = targetImage
  }
  
  // 该方法主要操作虚拟Image，完成加载
  setSrc(targetUrl) {
     // 真实img节点初始化时展示的是一个占位图
      this.targetImage.setSrc(ProxyImage.LOADING_URL)
      // 创建一个帮我们加载图片的虚拟Image实例
      const virtualImage = new Image()
      // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
      virtualImage.onload = () => {
          this.targetImage.setSrc(targetUrl)
      }
      // 设置src属性，虚拟Image实例开始加载图片
      virtualImage.src = targetUrl
  }
}
```

* 缓存代理
```js
function add () {
  console.log("开始计算了")
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1,2,3,4,5))

const proxyAdd = (function () {
  const resultCache = {};
  return function (...args) {
    // console.log(args.join(","))
    let key = args.join(",");
    if (resultCache[key]) {
      return resultCache[key];
    }
    return resultCache[key] = add(...args);
  }
})()
console.log(proxyAdd(1,2,3))
console.log(proxyAdd(1,2,3))
```

* 保护代理
```js
let girl = {
  name: "xxx",
  age: 20,
  address: "xxxxxxxxxxxxxxxxxxxx"
}

let proxyGirl = new Proxy(girl, {
  get (target, key) {
    if (key === "address") {
      return "你不能知道女孩的地址！！"
    } else {
      return target[key];
    }
  },
  set (target, key, value) {
    if (key === "age") {
      target[key] = value;
    } else {
      console.log("你没有权限修改")
    }
  }
})
console.log(proxyGirl.name);
console.log(proxyGirl.age);
console.log(proxyGirl.address);

proxyGirl.name = "zhangsan";
proxyGirl.age = 3;
proxyGirl.address = "x";
console.log(proxyGirl);
```