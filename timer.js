function countstart() {
	count = eval(document.form_countdown.counter.value);
	timerID = setInterval('countdown()',1000);
	document.form_countdown.start.disabled = true;
}

function countstop() {
	clearInterval(timerID);
	document.form_countdown.start.disabled = false;
	document.form_countdown.reset();
}

function countdown() {
	document.form_countdown.counter.value= count;
	count--;
	if (count < 0) countstop();
}