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
                if (age === ""){
                  point = true
                }
              } 
  
  
  let futureAge = (+age + 5);

  let amountDays = (age * 365);

    let male = confirm('Ваш пол мужской? Нажмите "Ок", если мужской, нажмите "Отмена", если женский')


    if (male == true) {
      male = "Мужской"
    } else if (male == false) {
      male = "Женский"
    }
      let pension 
    if (age>=65 && male === "Мужской") {
      pension  = "Да"
    } else if  (age>=60 && male === "Женский"){
      pension  = "Да"
    }
    else {
      pension = "Нет"
    }

  alert(`
      Ваше ФИО: ${surname} ${name} ${patronymic} 
      Ваш возраст в годах: ${age}
      Ваш возраст в днях: ${amountDays}
      Через 5 лет вам будет: ${futureAge}
      Ваш пол: ${male}
      Вы на пенсии: ${pension}`);	

      // function enter_pol() {
      //   pol=confirm("Ваш пол - мужской?");
      //   pol?pens=65:pens=60;
      //   if(pens==65&&vozrast>=pens || pens==60&&vozrast>=pens) {
      //     pens_confirm="да";
      //   } else{
      //     pens_confirm="нет"
      //   }
      //   if(pol){
      //     pol="мужской";
      //   } else{
      //     pol="женский";
      //   }
      // }