'use strict'

function getResult(a, b, c){
		let discriminant = Math.pow(b, 2) - 4 * a * c;
	
		let array = [];
	
 		if (discriminant < 0) {
 			array;
 		} else if (discriminant === 0) {
 			let rootOne = -b / 2 * a;
 			array.push(rootOne);
 		} else {
			let rootOneOfTwo = (-b + Math.sqrt(discriminant)) / 2 * a;
			array.push(rootOneOfTwo);
 			let rootTwoOfTwo = (-b - Math.sqrt(discriminant)) / 2 * a;
 			array.push(rootTwoOfTwo);
 		}
	
		let result = array;
	
    return result;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}