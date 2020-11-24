'use strict'
console.clear();
//----------- 1 task -----------

const weapons = [
	new Knife(), 
	new Staff(), 
	new Axe(), 
	new StormStaff(), 
	new LongBow(), 
	new Bow()
];

function getNames(){
	return weapons.map(function(elem){
		return elem.name;
	});
}

function getCountReliableWeapons(element) {
	let arrDurability = [];
	
	weapons.filter(function(elem){
		if (element < elem.durability){
			arrDurability.push(elem.durability);
		}
	});
	
	return arrDurability.length;
}

function hasReliableWeapons(element){
	return weapons.some(elem => element < elem.durability);
}

function getReliableWeaponsNames(element){
	return weapons
		.filter(elem => element < elem.durability)
		.map(elem => elem.name);
}

function getTotalDamage(){
	let arrAttack = 0;
	
	weapons.filter(elem => arrAttack += elem.attack);
	
	return arrAttack;
}
	
function getValuestCountToSumValues(arr, sum){
	let sumNumbers = 0;
	let len = 0;
	
	arr.map(function(elem){
		if(sum > sumNumbers){
			sumNumbers += elem;
			len++;
		}
	});
	
	return len;
}

//----------- 2 task -----------

function sleep(milliseconds){
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  //sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2){
	if (arr1.length !== arr2.length){
		return false; 
	}
	
	function fun(elem, index){
		return arr2.find((el, ind) => elem === el && index === ind);
	}	
	return arr1.every(fun);
}
 
function memorize(fn, limit){
	const memory = [];

	function inner(...args) {
		let results = memory.find(function(elem){
			if (compareArrays(elem.args, args) == true) {
				return elem;
			}
		});
		
		if(results == null) {	
			memory.push({args: args, result: fn(...args)});
			
			if(memory.length > limit) { 
				memory.shift(); 
			}
			
			return memory[memory.length - 1].result;
		} else {
			return results.result;
		}
	}
	
	return inner;
}

const mSum = memorize(sum, 5);

//----------- 3 task -----------

function testFunction(array){
	for (let i = 0; i < 100; i++) {
		array.forEach(function(element){
			return mSum(...element);
		});
	};
}

function testCase(testFunction, nameTaimer){
	console.time(nameTaimer);
	console.timeEnd(nameTaimer);
}

const arr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

testCase(arr, "Время выполнения");