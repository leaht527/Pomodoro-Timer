const startingMins = 10; //what u want the time to be
let time = startingMins * 60;

const countdownEl = document.getElementById('countdown');

function updateCountdown() {
    const minutes = Math.floor(time/60); //divide total seconds by 60 to get minutes (whole number)
    let seconds = time % 60; //use modulus to get all of the remaining seconds 
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(updateCountdown, 1000);
})