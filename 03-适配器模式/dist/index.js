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
var Hole = /** @class */ (function () {
    function Hole(radius) {
        this.radius = radius;
    }
    Hole.prototype.getRadius = function () {
        return this.radius;
    };
    Hole.prototype.fit = function (roundPeg) {
        return this.getRadius() >= roundPeg.getRadius();
    };
    return Hole;
}());
var RoundPeg = /** @class */ (function () {
    function RoundPeg(radius) {
        this.radius = radius;
    }
    RoundPeg.prototype.getRadius = function () {
        return this.radius;
    };
    return RoundPeg;
}());
var RectPeg = /** @class */ (function () {
    function RectPeg(width) {
        this.width = width;
    }
    RectPeg.prototype.getWidth = function () {
        return this.width;
    };
    return RectPeg;
}());
var RectPegAdapter = /** @class */ (function (_super) {
    __extends(RectPegAdapter, _super);
    function RectPegAdapter(rectPeg, radius) {
        if (radius === void 0) { radius = 0; }
        var _this = _super.call(this, radius) || this;
        _this.rectPeg = rectPeg;
        _this.radius = radius;
        return _this;
    }
    RectPegAdapter.prototype.getRadius = function () {
        this.radius = this.rectPeg.getWidth() * Math.sqrt(2) / 2;
        return this.radius;
    };
    return RectPegAdapter;
}(RoundPeg));
var hole = new Hole(3);
var roundPeg1 = new RoundPeg(3);
var roundPeg2 = new RoundPeg(4);
// console.log(hole.fit(roundPeg1));
// console.log(hole.fit(roundPeg2));
var rectPeg1 = new RectPeg(4);
var rectPeg2 = new RectPeg(10);
// 报错
// console.log(hole.fit(rectPeg1))
// console.log(hole.fit(rectPeg2))
var rectPegAdapter1 = new RectPegAdapter(rectPeg1);
var rectPegAdapter2 = new RectPegAdapter(rectPeg2);
console.log(rectPegAdapter1, rectPegAdapter1.getRadius());
console.log(rectPegAdapter2, rectPegAdapter2.getRadius());
console.log(hole.fit(rectPegAdapter1));
console.log(hole.fit(rectPegAdapter2));
