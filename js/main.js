'use strict';

let flag = false;
  let surname;
      do {
          surname = prompt("Фамилия", '');
      }	while (surname==flag||surname==null);

  let name;
      do {
          name = prompt("Имя", '');
          }	while (name==flag||name==null);

  let patronymic;
      do {
          patronymic = prompt("Отчество", '');
              }	while (patronymic==flag||patronymic==null);
  
  let age;
          do {
              age = parseInt(prompt("Возраст", ''));
      } while (age==flag||age==null);
  
  let futureAge = (age +5);

  let amountDays = (age * 365);

    let male = confirm('Ваш пол мужской? Нажмите Ок если мужской, нажмите отмена если женский')

    if (male == true) {
      male = "Мужской"
    } else {
      male = "Женский"
    }
      let pension 
    if (age<55) {
      pension  = "Раздеватся и работать"
    } else if  (age>100){
      pension  = "Долгожитель"
    }
    else {
      pension = "Пенсионер"
    }
  alert(`
      ваше ФИО: ${surname} ${name} ${patronymic} 
      ваш возраст в годах: ${age}
      ваш возраст в днях: ${amountDays}
      через 5 лет вам будет: ${futureAge}
      ваш пол: ${male}
      вы на пенсии: ${pension}`);	