class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.try = Math.round((this.maxValue + this.minValue) / 2);
        return this.try;
    }

    lower() {
        this.maxValue = this.try;
    }

    greater() {
        this.minValue = this.try;
    }
}

module.exports = GuessingGame;
