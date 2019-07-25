export class Pair {

    public x: number = undefined;
    public y: number = undefined;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    sum() {
        return this.x + this.y;
    }

}
