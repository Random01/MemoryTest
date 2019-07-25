export class Pair {

    public x = undefined;
    public y = undefined;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    sum() {
        return this.x + this.y;
    }

}
