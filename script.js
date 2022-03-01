const dob = '10 Mar 2022'
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

function countdown() {
    const dobDate = new Date(dob)
    const currentDate = new Date()

    const seconds = (dobDate - currentDate) / 1000;
    
    const sec = Math.floor(seconds) % 60;

    const minutes = Math.floor(seconds / 60) % 60;

    const hours = Math.floor(seconds / 3600) % 24;

    const days = Math.floor(seconds / 3600 / 24);

    secondsEl.innerText = formatTime(sec)
    minsEl.innerText = formatTime(minutes)
    hoursEl.innerText = formatTime(hours)
    daysEl.innerText = formatTime(days)
}

function formatTime(time){
    return (time < 10 ? '0' + (time) : time)
}

countdown()

setInterval(countdown, 1000);