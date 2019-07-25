export const SimpleSimplePair = function (x: number, y: number) {
    this.x = x;
    this.y = y;
};

Object.defineProperty(SimpleSimplePair, 'x', {
    value: undefined,
    writable: true,
    enumerable: true,
});

Object.defineProperty(SimpleSimplePair, 'y', {
    value: undefined,
    writable: true,
    enumerable: true,
});

SimpleSimplePair.prototype.sum = function () {
    return this.x + this.y;
};
