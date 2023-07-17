// Get the timer element
let timerElement = document.getElementById("learning");

// Initialize variables for hours, minutes and seconds
let hours = 0;
let minutes = 0;
let seconds = 0;

// Function to update the timer display
function updateTimer() {
    // Increment the seconds
    seconds++;

    // Check if we need to increment the minutes or hours
    if (seconds >= 60) {
        seconds = 0;
        minutes++;

        if (minutes >= 60){
            minutes = 0;
            hours++;
        }
    }

    //format the time display as HH:MM:SS
    let time = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

    // Update the timer element
    timerElement.textContent = time;
}

setInterval(updateTimer, 1000);
