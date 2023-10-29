/**
 * When we click start button:
 *  1. The time start increasing.
 *  2. The start button becomes Stop button
 *  3. Reset button becomes Subsection button
 *  4. Add the HTML of the subsection under the button
 *      1. Using flex box
 *
 * When we click Subsection button:
 *  1. Add the time of that moment under the button
 *
 * When we click Stop button:
 *  1. The time stop increasing.
 *  2. The stop button becomes start button
 *  3. The Subsection button becomes Reset button
 *
 * When we click Reset button:
 *  1. The time reset to 0
 *  2. The Stop button becomes Start button
 *  3. The Reset button becomes Subsection button.
 *  4. The subsection button is useless until the timer starts.
 */



let time = {
    minute: 0,
    second: 0,
    millisecond: 0
};

time.minute = Number(time.minute);
time.second = Number(time.second);
time.millisecond = Number(time.millisecond);

let timeInterval = 0;

const buttonsElement = document.querySelector('.button-grid');
const timeElement = document.querySelector('.js-time');
const subsectionElement = document.querySelector('.js-subsection');

let startTimeButton = document.querySelector('.js-start-time-button');
let stopTimeButton;
let subsectionButton;
let resetButton;

startTimeButton.addEventListener('click', startTimer);

let recordNumber = 1;

function startTimer() {
    // remove eventListener to reset and start button
    startTimeButton.removeEventListener('click', startTimer);
    let resetButton = document.querySelector('.js-reset-time-button');
    if (resetButton) {
        resetButton.removeEventListener('click', resetTimer);
    }

    timeInterval = setInterval(timer, 1);
    // stop button and subsection button
    buttonsElement.innerHTML = `
    <button class="stop-time-button js-stop-time-button">Stop</button>
    <button class="js-subsection-button subsection-button">Subsection</button>`;

    // add eventListener to stop and subsection button
    stopTimeButton = document.querySelector('.js-stop-time-button');
    stopTimeButton.addEventListener('click', stopTimer);
    subsectionButton = document.querySelector('.js-subsection-button');
    subsectionButton.addEventListener('click', addSubsection);
}

function addSubsection() {
    if (time.minute === 0 && time.second === 0 && time.millisecond === 0) {
        return;
    }
    let [min, sec, mSec] = displayTime(time);

    subsectionElement.innerHTML += `
    <div class="record">
      <div>Record ${recordNumber}</div>
      <div>${min}:${sec}.${mSec}</div>
    </div>
    `;
    recordNumber ++;
}
function stopTimer() {
    clearInterval(timeInterval);
    // stop listener of stop and subsection button
    stopTimeButton.removeEventListener('click', stopTimer);
    subsectionButton.removeEventListener('click', addSubsection);

    buttonsElement.innerHTML = `
    <button class="js-start-time-button start-time-button">Start</button>
    <button class="js-reset-time-button reset-time-button">Reset</button>`;

    startTimeButton = document.querySelector('.js-start-time-button');
    startTimeButton.addEventListener('click', startTimer);
    resetButton = document.querySelector('.js-reset-time-button');
    resetButton.addEventListener('click', resetTimer);
}

function resetTimer() {
    time = {
        minute: 0,
        second: 0,
        millisecond: 0
    };
    timeElement.innerHTML = '00:00.000';
    recordNumber = 1;

    // The Stop button becomes Start button The Reset button becomes Subsection button.
    buttonsElement.innerHTML = `
    <button class="js-start-time-button start-time-button">Start</button>
    <button class="js-subsection-button subsection-button">Subsection</button>`;

    // Clear the subsection
    subsectionElement.innerHTML = '';

    // add listener to start button
    startTimeButton = document.querySelector('.js-start-time-button');
    startTimeButton.addEventListener('click', startTimer);
}

function timer() {
    // increase time
    if (time.millisecond < 1000) {
        time.millisecond ++;
    }
    else {
        time.millisecond = 0;
        if (time.second < 60) {
            time.second ++;
        }
        else {
            time.second = 0;
            time.minute ++;
        }
    }
    // display time
    let [min, sec, mSec] = displayTime(time);
    document.querySelector('.js-time').innerHTML = `${min}:${sec}.${mSec}`;
}

function displayTime(time) {
    let min = time.minute.toString().padStart(2, '0');
    let sec = time.second.toString().padStart(2, '0');
    let mSec = time.millisecond.toString().padStart(3, '0');
    return [min, sec, mSec];
}
