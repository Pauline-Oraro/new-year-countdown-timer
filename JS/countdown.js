class CountDown {
    constructor(expiredDate, onRender, onComplete) {
        this.setExpiredDate(expiredDate);
        this.onRender = onRender;
        this.onComplete = onComplete;
    }

    setExpiredDate(expiredDate) {
        // get the current time in milliseconds
        const currentTime = new Date().getTime();
        // calculate the remaining time in milliseconds
        this.timeRemaining = expiredDate.getTime() - currentTime;
        //should the countdown complete or start
        this.timeRemaining <= 0 ?
            this.complete() :
            this.start();
    }

//checks if the onComplete callback is passed and invoked if not the complete() won't do anything
    complete() {
        if (typeof this.onComplete === 'function') {
            onComplete();
        }
    }

//returns an object that contains the remaining days, hours, minutes and seconds  based on timeRemaining property
    getTime() {
        return {
            days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24),
            hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
            minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
            seconds: Math.floor(this.timeRemaining / 1000) % 60
        };
    }

//calls the onRender callback with the current remaing time object returned by the getTime method
    update() {
        if (typeof this.onRender === 'function') {
            this.onRender(this.getTime());
        }
    }

    start() {
        // update the countdown
        this.update();

        //  setup a timer
        const intervalid = setInterval(() => {
            // update the timer  
            this.timeRemaining -= 1000;

            if (this.timeRemaining < 0) {
                // call the callback
                complete();

                // clear the interval if expired
                clearInterval(intervalid);
            } else {
                this.update();
            }

        }, 1000);
    }
}