'use strict'

class AlarmClock {
	constructor(alarmCollection, timerId) {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id){ 
		if (id === undefined){ // переписать проверку
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
		}
		
		if (this.alarmCollection.some(elem => elem.id == id)){ 
			return console.error('Будильник с таким id уже существует.') ;
		}
	
		this.alarmCollection.push({id, time, callback});
	}
	
	removeClock(id) {
		const index = this.alarmCollection.findIndex(elem => elem.id == id); // не filter
		if (index == -1){ // сократить
			return false;
		} else {
			this.alarmCollection.splice(index, 1);
			return true;
		}
	}
	
	getCurrentFormattedTime(){
		const today = new Date();
		
		const hours = today.getHours() < 10 ? `0${today.getHours()}` : `${today.getHours()}`;
    const minutes = today.getMinutes() < 10 ? `0${today.getMinutes()}` : `${today.getMinutes()}`;
		
		return `${hours}:${minutes}`;
	}
	
	start() {
		let externalObj = this;
		
		function checkClock(alarm) {
			if(alarm.time == externalObj.getCurrentFormattedTime()){
				return alarm.callback();
			}
		}
		
		function interval(){
			externalObj.alarmCollection.forEach(elem => checkClock(elem));
		}
		
		if(!this.timerId){
			this.timerId = setInterval(interval, 1000);
		}
		
	}
	
	stop(){
		let externalObj = this;
		
		if(externalObj.timerId){	
			clearInterval(externalObj.timerId);
			externalObj.removeClock(externalObj.timerId)
			externalObj.timerId = null;
		}
	}
	
	printAlarms(){
		const print = console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}\n`);
		
		return print + this.alarmCollection.forEach(elem => console.log(`Будильник №${elem.id} ${elem.time}`));
	}
	
	clearAlarms(){
		this.stop();
		this.alarmCollection.length = 0;
	}
}

// ----------- test -----------


function testCase(){
	let phoneAlarn = new AlarmClock();
	
	phoneAlarn.addClock('17:1', () => console.log('Пора вставать'), 1);
	phoneAlarn.addClock('17:2', () => { console.log('Давай, вставай уже!'); phoneAlarn.removeClock(2)}, 2);
	//phoneAlarn.addClock('16:53', () => console.log('Иди умываться'));

	phoneAlarn.addClock('17:3', () => {
		console.log('Вставай, а то проспишь!');
		phoneAlarn.clearAlarms();
		phoneAlarn.printAlarms();
	}, 3);

	phoneAlarn.addClock('17:4', () => console.log('Вставай, а то проспишь!'), 1);
	phoneAlarn.printAlarms();
	phoneAlarn.start();
}

testCase();