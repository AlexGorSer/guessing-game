class GuessingGame {
    constructor() {
        this.min;
        this.max;
    };
    averNumber() {
        let num = Math.ceil((this.max + this.min) / 2)
        return num;
    };
    setRange(min, max) {
        this.min = min;
        this.max = max;
    };
    guess() {
        return this.averNumber();
    };
    lower() {
        this.max = this.averNumber();
    };
    greater() {
        this.min = this.averNumber();
    };
}

module.exports = GuessingGame;
