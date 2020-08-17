var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.shout = function () {
        console.log(this.name + "喵喵喵");
    };
    return Cat;
}());
var cat = new Cat('Tom');
cat.shout();
var DecoratorCat = /** @class */ (function () {
    function DecoratorCat(cat) {
        this.cat = cat;
    }
    DecoratorCat.prototype.shout = function () {
        this.lovely();
        this.cat.shout();
    };
    DecoratorCat.prototype.lovely = function () {
        console.log("叫之前还要卖个萌");
    };
    return DecoratorCat;
}());
console.log("---------------------");
var cat_ = new DecoratorCat(cat);
cat_.shout();
