// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

setInterval(addTime, 1000);

function addTime() {
	time++;
	counterElement.innerHTML = time;
}
