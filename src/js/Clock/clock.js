export class Clock {
    #date;
    #hour;
    #minutes;
    #seconds;
    #milliseconds;

    constructor(language = 'english') {
        this.language = language.toLowerCase();
        this.#date = new Date();
        this.#hour = this.#date.getHours();
        this.#minutes = this.#date.getMinutes();
        this.#seconds = this.#date.getSeconds()
        this.#milliseconds = this.#date.getMilliseconds();
    }

    #banglaTranslator = number => {
        const banglaDigits = Object.freeze(['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']);

        const banglaNumber = ('' + number)
            .split('')
            .reduce((banglaNumber, digit) => banglaNumber += banglaDigits[digit], "")
        
        if (banglaNumber.length === 1) {
            return `০${banglaNumber}`;
        }
        
        return banglaNumber;
    }

    get getHour() {
        if (this.language !== 'bangla') {
            return this.#hour.toString();
        }

        return this.#banglaTranslator(this.#hour);
    }

    get getMinutes() {
        if (this.language !== 'bangla') {
            return this.#minutes.toString();
        }

        return this.#banglaTranslator(this.#minutes);
    }

    get getSeconds() {
        if (this.language !== 'bangla') {
            return this.#seconds.toString();
        }

        return this.#banglaTranslator(this.#seconds);
    }

    get getMilliseconds() {
        if (this.language !== 'bangla') {
            return this.#milliseconds.toString();
        }

        return this.#banglaTranslator(this.#milliseconds);
    }
}