// get the new year
const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date (`January 01 ${currentYear + 1} 00:00:00`);
};

//update the year element
const year = document.querySelector(".year");
year.innerHTML = getNewYear().getFullYear();

//select the elements
const app = document.querySelector(".countdown-timer");
const message = document.querySelector(".message");
const heading = document.querySelector("h1");

const format = (t) => {
    return t < 10 ? "0" + t : t;
}

//shows the remaining days, hours, minutes and seconds
const render = (time) => {
    app.innerHTML = `
    <div class="count-down">
        <div class="timer"> 
            <h2 class="days">${format(time.days)}</h2>
            <small>Days</small>
        </div>
        <div class="timer"> 
            <h2 class="hours">${format(time.hours)}</h2>
            <small>Hours</small>
        </div>
        <div class="timer"> 
            <h2 class="minutes">${format(time.minutes)}</h2>
            <small>Minutes</small>
        </div>
        <div class="timer"> 
            <h2 class="seconds">${format(time.seconds)}</h2>
            <small>Seconds</small>
        </div>
    </div>
    `
};

//when countdown completes it should display happy new year message
const showMessage = () => {
    message.innerHTML = `Happy New Year ${newYear} !`;
    app.innerHTML = "";
    heading.style.display = "none";
}

//hides the greeting message and shows the heading element
const hideMessage = () => {
    message.innerHTML = "";
    heading.style.display = "block";
}

//shows the message for a period of time and then hides it and sets the expiredDate to the new year
const complete = () => {
    showMessage()
    setTimeout(() => {
        hideMessage();
        countdownTimer.setExpiredDate(getNewYear());
    }, 1000 * 60 * 24);
}

const countdownTimer = new CountDown(
    getNewYear(),
    render,
    complete
);