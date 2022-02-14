function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* Exercício 1:
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

  // Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

  // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

  // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

const dezDaysList = ["", "", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function daysOfTheMonth() {
  let daysList = document.getElementById("days"); // Onde eu vou criar o elemento
  for (let index = 0; index < dezDaysList.length; index += 1) { // Criando elemento
    let listElement = document.createElement("li");
    let days = dezDaysList[index];
    listElement.innerHTML = days; // Customizando o elemento
    listElement.className = "day";
    daysList.appendChild(listElement); // Inserindo o elemento no HTML
  }
}
daysOfTheMonth();

function holidays() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let days = dezDaysList[index];
        let holidayDay = document.getElementsByClassName("day")[index];
        if (days === 24) {
            holidayDay.classList.add("holiday");
        } else if (days === 25){
            holidayDay.classList.add("holiday");
        } else if (days === 31){
            holidayDay.classList.add("holiday");
        }
    }
}
holidays();

function fridays() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let days = dezDaysList[index];
        let friday = document.getElementsByClassName("day")[index];
        if (days === 4) {
            friday.classList.add("friday");
        } else if (days === 11){
            friday.classList.add("friday");
        } else if (days === 18){
            friday.classList.add("friday");
        } else if (days === 25){
            friday.classList.add("friday");
        }
    }
}
fridays();


/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

// Adicione a este botão a ID "btn-holiday" .

// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function createButton(buttonName) {
    let buttonsContainer = document.querySelector(".buttons-container");
    let createButton = document.createElement("button");
    createButton.innerHTML = buttonName;
    createButton.id = "btn-holiday";
    buttonsContainer.appendChild(createButton);
}
createButton("Feriados");


/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" . */

let button = document.querySelector("#btn-holiday");
let holidayClass = document.querySelectorAll(".holiday");
let initialColor = "rgb(238,238,238)";
let newBgColor = "black";


function showHolidays() {
    for (let index = 0; index < holidayClass.length; index += 1) {
        let holidayDay = holidayClass[index];
        if (holidayDay.style.backgroundColor === newBgColor) {
           holidayDay.style.backgroundColor = initialColor; 
        } else{
            holidayDay.style.backgroundColor = newBgColor;
        }
    }
}
button.addEventListener("click", showHolidays);


/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

// Adicione a este botão o ID "btn-friday" .

// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function createButton(buttonName) {
    let buttonsContainer = document.querySelector(".buttons-container");
    let createButton = document.createElement("button");
    createButton.innerHTML = buttonName;
    createButton.id = "btn-holiday";
    buttonsContainer.appendChild(createButton);
}
createButton("Sexta-feira");


/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */



