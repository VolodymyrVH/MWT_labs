let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period");
let changeFormatButton = document.getElementById("changeFormat");

let is12HoursFormat = false;

function updtClock()
{
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (is12HoursFormat)
    {
        const periodTime = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        period.innerHTML = periodTime;
    }
    else
    {
        period.innerHTML = "";
    }

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;

}

setInterval(updtClock, 1000);
updtClock();

changeFormatButton.addEventListener("click", () => {
    is12HoursFormat = !is12HoursFormat;
    updtClock();
})
