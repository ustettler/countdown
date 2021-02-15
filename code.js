// Select container for Times
/* let day = document.getElementsByClassName("timer-container days")
let hours = document.getElementsByClassName("timer-container hours")
let minutes = document.getElementsByClassName("timer-container minutes")
let seconds = document.getElementsByClassName("timer-container seconds") */


// Goal Date

const goal = new Date("Dec 24, 2022 11:57:00").getTime();

let x = setInterval(function() {

let now = new Date().getTime();

let distance = goal - now;
console.log("Zeit: " +distance)

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("tage").innerHTML = days;
document.getElementById("stunden").innerHTML = hours;
document.getElementById("minuten").innerHTML = minutes;
document.getElementById("sekunden").innerHTML = seconds;

if (distance < 0) {
  clearInterval(x);
  document.getElementById("tage").innerHTML = "EXPIRED";
}

}, 1000);

