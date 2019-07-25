export const SimplePair = function (x: number, y: number) {
    this.x = x;
    this.y = y;
};

SimplePair.prototype.x = undefined;
SimplePair.prototype.y = undefined;
SimplePair.prototype.sum = function () {
    return this.x + this.y;
};
