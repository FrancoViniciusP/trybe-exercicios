function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let i = 0; i < dezDaysList.length; i += 1){
      const dayNumbers = dezDaysList[i];
      const ul = document.querySelector('#days');
      const listDayNumbers = document.createElement('li');
      listDayNumbers.innerHTML = dayNumbers;
      listDayNumbers.classList.add('day');
      ul.appendChild(listDayNumbers);
      if (dayNumbers == 24 || dayNumbers == 25 || dayNumbers == 31 ) {
        listDayNumbers.classList.add('holiday');
      }
      if (dayNumbers == 4 || dayNumbers == 11 || dayNumbers == 18 || dayNumbers == 25){
        listDayNumbers.classList.add('friday');
      }
    }    
}

  createDaysOfTheMonth();

function buttonFeriado() {
  const buttonName = 'Feriados';
  const botaoferiado = document.createElement('button');
  botaoferiado.innerText = buttonName;
  botaoferiado.setAttribute('id','btn-holiday');
  const classeBotao = document.querySelector('.buttons-container');
  classeBotao.appendChild(botaoferiado);
}

  buttonFeriado();


function changeHolidayColor() {
  const temp = document.querySelectorAll('.holiday');
  const actualColor = temp[0].style.backgroundColor;
  switch (actualColor) {
    case '' : 
      for (let i in temp){    
        temp[i].style.backgroundColor = 'yellow'; 
      } 
    break;
    case 'yellow':
      for (let i in temp){    
        temp[i].style.backgroundColor = ''; 
      } 
    break;
  } 
}

const buttonHoliday = document.querySelector('#btn-holiday');
buttonHoliday.addEventListener('click', changeHolidayColor)