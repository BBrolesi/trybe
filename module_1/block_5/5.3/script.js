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
  
  // Escreva seu código abaixo.

  // Exercício 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezHolidays = [24,25,31];
  const dezFridays = [4,11,18,25];
  let ulDays = document.querySelector('#days')
  for(let index in dezDaysList){
    let newDay = document.createElement('li');
    newDay.innerText = dezDaysList[index];
    newDay.className = 'day';
    if(dezHolidays.includes(dezDaysList[index]))
    {
        newDay.className += ' holiday';
    }
    if(dezFridays.includes(dezDaysList[index])){
        newDay.className += ' friday';
    }
    ulDays.appendChild(newDay);
  }

  // Exercício 2

let hollidaysButton = document.createElement('button');
hollidaysButton.id = 'btn-holiday';
hollidaysButton.innerText = 'Feriados';
let buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.appendChild(hollidaysButton);

//Exercício 3
let holidays = document.querySelectorAll('.holiday');
hollidaysButton.addEventListener('click', function(){
    for(let item of holidays){
        if(item.style.backgroundColor == 'rgb(46, 204, 113)'){
            item.style.backgroundColor = 'rgb(238,238,238)';
        }
        else{
            item.style.backgroundColor = 'rgb(46, 204, 113)';
        }
    }
})

//Exercício 4
let fridayButton = document.createElement('button');
fridayButton.id = 'btn-friday';
fridayButton.innerText = 'Sextou!';
buttonsContainer.appendChild(fridayButton);

//Exercício 5
let fridays = document.querySelectorAll('.friday');
let newFridayText = 'Sextou!';
fridayButton.addEventListener('click', function(){
    for(let i = 0; i < fridays.length; i += 1){
        if(fridays[i].innerText != newFridayText){
            fridays[i].innerText = newFridayText;
        }
        else{
            fridays[i].innerText = dezFridays[i];
        }
    }
})

//Exercício 6
function zoomIn(event){
    if(event.target.id !== 'days'){
        event.target.style.fontSize = '40px';
    }  
}

function zoomOut(event){
    if(event.target.id !== 'days'){
    event.target.style.fontSize = '20px';
    }
}

ulDays.addEventListener('mouseover', zoomIn);
ulDays.addEventListener('mouseout', zoomOut);

//Exercício 7
function addTask(task){
    let newTask = document.createElement('span');
    newTask.innerText = task;
    let myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(newTask);
}

//Exercício 8
function addTaskColor(color){
    let taskColor = document.createElement('div');
    taskColor.style.backgroundColor = color;
    taskColor.className = 'task';
    let myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(taskColor);
}