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
  
              let point = true;
              let age;
              while(point){
                
                age = prompt("Возраст", '')
            
                if (!isNaN(+age)){
                  point = false
                }
                if (age === "" || age == null){
                  point = true
                }
              } 
  
  
  let futureAge = (+age + 5);

  let amountDays = (age * 365);

    let male = confirm('Ваш пол мужской? Нажмите "Ок", если мужской, нажмите "Отмена", если женский')

    let pension
    if (male) {
      pension = (age >= 65) ? 'Да' : 'Нет';
    } else {
      pension = (age >= 60) ? 'Да' : 'Нет';
    }
    let gender = (male) ? 'Мужской' : 'Женский';
  
    alert(`
      Ваше ФИО: ${surname} ${name} ${patronymic} 
      Ваш возраст в годах: ${age}
      Ваш возраст в днях: ${amountDays}
      Через 5 лет вам будет: ${futureAge}
      Ваш пол: ${gender}
      Вы на пенсии: ${pension}`);	