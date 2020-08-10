console.log("事件代理")
console.log("------------------------------------------------")
console.log("点击页面中的元素看效果")

// let aLi = document.querySelectorAll("li");
// aLi.forEach(li => {
//   li.onclick = function () {
//     alert(this.innerHTML);
//   }
// })
let oUl = document.querySelector("ul");
oUl.onclick = function(e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerHTML);
  }
}

console.log("虚拟代理")
console.log("------------------------------------------------")
console.log("请看index.js源码-虚拟代理")

// class PreLoadImage {
//   // 占位图的url地址
//   static LOADING_URL = 'xxxxxx'
  
//   constructor(imgNode) {
//       // 获取该实例对应的DOM节点
//       this.imgNode = imgNode
//   }
  
//   // 该方法用于设置真实的图片地址
//   setSrc(targetUrl) {
//       // img节点初始化时展示的是一个占位图
//       this.imgNode.src = PreLoadImage.LOADING_URL
//       // 创建一个帮我们加载图片的Image实例
//       const image = new Image()
//       // 监听目标图片加载的情况，完成时再将DOM上的img节点的src属性设置为目标图片的url
//       image.onload = () => {
//           this.imgNode.src = targetUrl
//       }
//       // 设置src属性，Image实例开始加载图片
//       image.src = targetUrl
//   }
// }

/**
 * 这个 PreLoadImage 乍一看没问题，但其实违反了我们设计原则中的单一职责原则。PreLoadImage 不仅要负责图片的加载，还要负责 DOM 层面的操作（img 节点的初始化和后续的改变）。这样一来，就出现了两个可能导致这个类发生变化的原因。

好的做法是将两个逻辑分离，让 PreLoadImage 专心去做 DOM 层面的事情（真实 DOM 节点的获取、img 节点的链接设置），再找一个对象来专门来帮我们搞加载——这两个对象之间缺个媒婆，这媒婆非代理器不可：
 */
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

/**
 * ProxyImage 帮我们调度了预加载相关的工作，我们可以通过 ProxyImage 这个代理，实现对真实 img 节点的间接访问，并得到我们想要的效果。

在这个实例中，virtualImage 这个对象是一个“幕后英雄”，它始终存在于 JavaScript 世界中、代替真实 DOM 发起了图片加载请求、完成了图片加载工作，却从未在渲染层面抛头露面。因此这种模式被称为“虚拟代理”模式。
 */

console.log("缓存代理")
console.log("------------------------------------------------")
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


console.log("保护代理")
console.log("------------------------------------------------")
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