var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HumbergerFactory = /** @class */ (function () {
    function HumbergerFactory() {
    }
    return HumbergerFactory;
}());
var MeatFactory = /** @class */ (function () {
    function MeatFactory() {
    }
    return MeatFactory;
}());
var SauceFactory = /** @class */ (function () {
    function SauceFactory() {
    }
    return SauceFactory;
}());
var Beef = /** @class */ (function (_super) {
    __extends(Beef, _super);
    function Beef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Beef.prototype.setMeat = function () {
        console.log('加入牛肉');
        return true;
    };
    return Beef;
}(MeatFactory));
var Pork = /** @class */ (function (_super) {
    __extends(Pork, _super);
    function Pork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pork.prototype.setMeat = function () {
        console.log('加入猪肉');
        return true;
    };
    return Pork;
}(MeatFactory));
var Salad = /** @class */ (function (_super) {
    __extends(Salad, _super);
    function Salad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Salad.prototype.setSauce = function () {
        console.log('加入色拉酱');
        return true;
    };
    return Salad;
}(SauceFactory));
var Chili = /** @class */ (function (_super) {
    __extends(Chili, _super);
    function Chili() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chili.prototype.setSauce = function () {
        console.log('加入辣椒酱');
        return true;
    };
    return Chili;
}(SauceFactory));
var ChiliBeafHamburger = /** @class */ (function (_super) {
    __extends(ChiliBeafHamburger, _super);
    function ChiliBeafHamburger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChiliBeafHamburger.prototype.createMeat = function () {
        return new Beef();
    };
    ChiliBeafHamburger.prototype.createSauce = function () {
        return new Chili();
    };
    return ChiliBeafHamburger;
}(HumbergerFactory));
var chiliBeafHamburger = new ChiliBeafHamburger();
var meat = chiliBeafHamburger.createMeat();
var sauce = chiliBeafHamburger.createSauce();
console.log(meat.setMeat());
console.log(sauce.setSauce());
