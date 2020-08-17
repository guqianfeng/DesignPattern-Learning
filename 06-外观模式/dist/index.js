var random = Math.random;
var randomRange = function (min, max) {
    var _a;
    if (!max) {
        max = min;
        min = 0;
    }
    if (min > max) {
        _a = [max, min], min = _a[0], max = _a[1];
    }
    return random() * (max - min) + min;
};
console.log(randomRange(10));
console.log(randomRange(0, 10));
console.log(randomRange(10, 0));
