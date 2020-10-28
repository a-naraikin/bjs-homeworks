'use strict'

console.log('\n=========== 1 Task ===========\n\n');

String.prototype.isPalindrome = function() {
	const str = this.toLowerCase();
	
	let arrayOriginal = str.split('');
	let arrayReverse = str.split('').reverse();
	
	function deleteSpace(array){
		for (let i = 0; i < array.length; i++){
  			if (array[i] == " "){
      			array.splice(i, 1);
				}
    	}
		return array.join('');
	};

	let strOne = deleteSpace(arrayOriginal),
			strTwo = deleteSpace(arrayReverse);

	return strOne === strTwo;
};

console.log('\n=========== 2 Task ===========\n\n');

function getAverageMark(marks){
	let average = 0;
	const len = marks.length;
	
	if (len == 0) {
		return average;
	} else {
		let sum = 0;
		for (let i = 0; i < len; i++) {
			sum += marks[i];
		}
		average = sum / len;

		const roundedAverage = Math.round(average);
		return roundedAverage;
	}
};

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}