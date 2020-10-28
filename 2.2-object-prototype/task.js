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

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}