function iteratorGenerator (list) {
  let index = 0;
  let length = list.length;
  return {
    next: function () {
      let done = index >= length;
      let value = !done ? list[index++] : undefined;
      return {
        done,
        value
      }
    }
  }
}

let list = ["1号顾客", "2号顾客", "3号顾客", "4号顾客", "5号顾客"]

let iterator = iteratorGenerator(list);
let now = iterator.next();
while(!now.done) {
  console.log(now.value);
  now = iterator.next();
}
