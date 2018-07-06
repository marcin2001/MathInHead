var arrWithEvent = ['+' , '-'];
var board = 700;
var showRezult = document.getElementById('showRezult');
var value = document.getElementById('value');
var clickshow = document.getElementById('click-show');
var clickevent = document.getElementById('click-event');
var rezult = 0;

function clickShowRezult(){
	showRezult.textContent = rezult;
	if( rezult === Number(value.value) ) {
		showRezult.style.color = 'blue';
	} else {
		showRezult.style.color = 'red';
	}
	

}

clickEvent()

function clickEvent(){
	showRezult.style.color = 'black';
	var firstValue = Math.floor(Math.random() * board / 2);
	var secondValue = Math.floor(Math.random() * firstValue);
	var randomValue = Math.floor(Math.random() * arrWithEvent.length)
	rezult = eval(firstValue + arrWithEvent[randomValue] + secondValue);
	showRezult.textContent = firstValue + " "+ arrWithEvent[randomValue] +" " + secondValue + ' = ' + '...';
	value.value = ''
}

clickshow.addEventListener('click' , clickShowRezult);
clickevent.addEventListener('click' , clickEvent);
