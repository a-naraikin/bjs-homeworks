'use strict'

console.log('=========== 1 Task ===========\n\n')

function getSolutions(a, b, c){
	let D = Math.pow(b, 2) - 4 * a * c;
	let x1, x2;
	
	const x = {D: D, roots: []};
	
	if (D == 0) {
		x1 = -b / (2 * a);
		x.roots.push(x1);
		
	} else if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		x.roots.push(x1, x2);
  }
	
	return x;
};

function showSolutionsMessage(a, b, c){
	let result = getSolutions(a, b, c);
	
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	
	if (result.roots == 0) {
		console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.roots.length == 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.roots.length == 2) {
	console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
	
	return;
}

showSolutionsMessage(7, 20, -3);