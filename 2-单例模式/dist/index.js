var Singleton = /** @class */ (function () {
    function Singleton(x, y) {
        this.x = x;
        this.y = y;
    }
    Singleton.getInstance = function (x, y) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(x, y);
        }
        return Singleton.instance;
    };
    Singleton.prototype.show = function () {
        console.log('show', this.x, this.y);
    };
    Singleton.prototype.setX = function (value) {
        this.x = value;
    };
    Singleton.instance = null;
    return Singleton;
}());
// let s1 = new Singleton
// let s2 = new Singleton
// console.log(s1 == s2)
var s1 = Singleton.getInstance(1, '1');
var s2 = Singleton.getInstance(2, '2');
console.log(s1 == s2);
s1.setX(999);
s1.show();
s2.show();
