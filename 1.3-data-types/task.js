'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    // проверка на число
	if (isNaN(percent))
        console.log(`Параметр ${'Процентная ставка'} содержит неправильное значение ${percent}`);
	if (isNaN(contribution))
		console.log(`Параметр ${'Начальный взнос'} содержит неправильное значение ${contribution}`);
	if (isNaN(amount))
		console.log(`Параметр ${'Общая стоимость'} содержит неправильное значение ${amount}`);
    
    let bodyCredit = amount - contribution;
    console.log(bodyCredit);
    
    let dates = new Date(); // сегодняшняя дата

    let months;
        months = (date.getFullYear() - dates.getFullYear()) * 12;
        months -= date.getMonth() + 1;
        months += dates.getMonth();
        months <= 0 ? 0 : months;
        let totalMonths = months + 1; // кол-во месяцев
    console.log(totalMonths);

    let rate = percent / 100 / 12; // % 

    let manthPlay = bodyCredit * (rate + rate / (((1 + rate)** totalMonths) - 1)); // ежемесячная оплата
    console.log(manthPlay);

    let sum = manthPlay * totalMonths; // общая сумма

    let totalAmount = sum.toFixed(2); // округление числа

    console.log(totalAmount);
    return Number(totalAmount);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let a = name;

    let checkValue = Boolean(name);
    let greeting;

	if (checkValue == 1) {
		greeting = `Привет, мир! Меня зовут ${name}`;
	} else {
		greeting = `Привет, мир! Меня зовут Аноним`;
    }

    console.log(greeting);
    return greeting;
}