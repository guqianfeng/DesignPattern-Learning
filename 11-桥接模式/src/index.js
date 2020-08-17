/**
 * var  Class1 = function(a,b,c){
       this.a = a;
       this.b = b;
       this.c = c;  
    }
    var Class2 = function(d){
          this.d = d;  
    }

    var BridgeClass = function(a,b,c,d){
          this.one = new Class1(a,b,c);
          this.two = new Class2(d);
    }
    这里使用桥接模式是为了让Class1、Class2能够独立于BridgeClass而发生改变。
 */
class Shape {
  constructor(shape) {
    this.shape = shape;
  }
}

class Color {
  constructor(color) {
    this.color = color;
  }
}

class Brige {
  constructor (shape, color) {
    this.shape = new Shape(shape);
    this.color = new Color(color);
  }
}

let brige = new Brige('圆形', '黄色');
console.log(brige)

