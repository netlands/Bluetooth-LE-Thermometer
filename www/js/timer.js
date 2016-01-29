var myTimer;
var timerActive = false;
var startTemp;
		
function timerButton() {
	if (timerActive) {
		stopTimer();
		document.getElementById("button").innerHTML = "Start";
	} else {
		startTimer();
		document.getElementById("button").innerHTML = "Stop"
	}
}

function startTimer() {
	timerActive = true;
	startTemp = document.getElementById("tempCelsius").innerHTML;
	myTimer = setInterval(timer, 1000);
}

function stopTimer() {
	timerActive = false;
	clearInterval(myTimer);
	stopAlarmSound();
}

function timer() {
	var d = new Date();
	// document.getElementById("time").innerHTML = d.toLocaleTimeString();

	if (document.getElementById("target").value > startTemp) {
		if (document.getElementById("tempCelsius").innerHTML >= document.getElementById("target").value) {
			playAlarmSound();
		}
	} else {
		if (document.getElementById("tempCelsius").innerHTML <= document.getElementById("target").value) {
			playAlarmSound();
		}
	}

}

function playAlarmSound() {
	document.getElementById('alarm').play();
}

function stopAlarmSound() {
	document.getElementById('alarm').pause();
	document.getElementById('alarm').currentTime = 0;
}		