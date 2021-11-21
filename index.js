const minutesDOC = document.querySelector('.minutes');
const secondsDOC = document.querySelector('.seconds');
const msecondsDOC = document.querySelector('.mseconds');

const delay = 37;
const minutes = 0, seconds = 5, mSeconds = 1000;

function start(){
    const promise = new Promise((resolve, reject) => {
        let min = minutes, sec = seconds, ms = mSeconds;
        const interval = setInterval(() => {
            ms -= delay;
            if (ms < delay) {
                sec--;
                ms += 1000;
                if (sec == 0) {
                    if (min == 0) {
                        clearInterval(interval);
                        resolve('success');
                    }
                    min--;
                    sec += 60;
                }
            }
            timerUpdate(min, sec, ms)
        }, delay);
    });

    promise.then(function () {
        timerUpdate(minutes, seconds, mSeconds)
    });
}

function timerUpdate(m, s, ms){
    minutesDOC.textContent = m;
    secondsDOC.textContent = s;
    msecondsDOC.textContent = ms%100;
}



