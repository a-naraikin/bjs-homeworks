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