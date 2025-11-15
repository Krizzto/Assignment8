// Set the target date (Change this date if needed)
let targetDate = new Date("December 31, 2025 23:59:59").getTime();

// Update every second
let timer = setInterval(function () {

    let now = new Date().getTime();
    let remaining = targetDate - now;

    // Time calculations
    let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    // Display values
    document.getElementById("days").textContent = days < 0 ? "00" : days;
    document.getElementById("hours").textContent = hours < 0 ? "00" : hours;
    document.getElementById("minutes").textContent = minutes < 0 ? "00" : minutes;
    document.getElementById("seconds").textContent = seconds < 0 ? "00" : seconds;

    // If countdown reaches zero
    if (remaining <= 0) {
        clearInterval(timer);
        document.getElementById("message").textContent = "Countdown Finished!";
    }

}, 1000);
