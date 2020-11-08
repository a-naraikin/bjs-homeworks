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

console.log('\n ----------- 2 task ----------- \n\n');

class Triangle{
  constructor(a, b, c){
    const isExistTriangle = a + b > c && a + c > b && b + c > a;
    if (!isExistTriangle) {
      let err = new Error("Треугольник с такими сторонами не существует")
      throw err;
    }
		
    this.a = a;
    this.b = b;
    this.c = c;
  }
	
  getPerimeter() {
    const perimeter = this.a + this.b + this.c;
    return perimeter;
  }
	
  getArea() {
    let p = this.getPerimeter() / 2; 
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
  }
}

class ErrorTriangele {
  getPerimeter() { return "Ошибка! Треугольник не существует"; }
  getArea() { return "Ошибка! Треугольник не существует"; }
}

function getTriangle(a, b, c){
  try{
    return new Triangle(a, b, c);
  } catch(err){
    return new ErrorTriangele();
  }
}
