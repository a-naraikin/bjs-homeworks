'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent))
    return `Параметр ${'Процентная ставка'} содержит неправильное значение ${percent}`;
  if (isNaN(contribution))
    return `Параметр ${'Начальный взнос'} содержит неправильное значение ${contribution}`;
  if (isNaN(amount))
    return `Параметр ${'Общая стоимость'} содержит неправильное значение ${amount}`;
    
  const bodyCredit = amount - contribution;
    
  const dates = new Date(); // сегодняшняя дата

  let months;
      months = (date.getFullYear() - dates.getFullYear()) * 12;
      months -= date.getMonth() + 1;
      months += dates.getMonth();
      months <= 0 ? 0 : months;
  const totalMonths = months + 1; // кол-во месяцев

  const rate = percent / 100 / 12; // % 
  const manthPlay = bodyCredit * (rate + rate / (((1 + rate)** totalMonths) - 1)); // ежемесячная оплата
  const sum = manthPlay * totalMonths; // общая сумма
  const totalAmount = sum.toFixed(2); // округление числа

  console.log(totalAmount);
  return Number(totalAmount);
}

function getGreeting(name) {
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
