'use strict'

console.log('\n ----------- 1 task ----------- \n\n');

function parseCount(value){
	if (isNaN(value)) {
		let err = new Error("Невалидное значение");
		throw err;
	}
	
	return Number.parseInt(value, 10);
}


function validateCount(value){
	try {
		return parseCount(value);
	} catch(err){
		return err;
	}
}