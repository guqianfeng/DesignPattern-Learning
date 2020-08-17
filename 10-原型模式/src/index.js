var obj = {
  a: 10,
  b: 20,
}

var testA = Object.create(obj)
var testB = Object.create(obj)

console.log(testA, testA.a, testA.__proto__.a)
console.log(testB, testB.b, testB.__proto__.b)

testA.a = 30;
console.log(testA, testA.a, testA.__proto__.a)
console.log(testB, testB.b, testB.__proto__.b)