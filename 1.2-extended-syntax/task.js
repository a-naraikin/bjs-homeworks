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
	let averageMark = 0;
	let arrayMark = marks;
	
	if (marks.length == 0) {
		return averageMark;
	}
	
	if (marks.length > 5) {
		console.log("оценок: " + marks.length);  // да
		arrayMark = marks.slice(0, 5)
	}
 
	if (marks.length > 0) {
		let sum = 0;
		for (let i = 0; i < arrayMark.length; i++) {
			let element = arrayMark[i];
			sum = sum + element;
		}

		averageMark = sum / arrayMark.length;
	}
	
    return averageMark;
}

function askDrink(name, dateOfBirthday){
	let yearOfBirthday = dateOfBirthday.getFullYear();
	
	let year = new Date().getFullYear();
	let age = year - yearOfBirthday;
	
	let result;

	if (age >= 18) {
		result = `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}
	
    return result;
}