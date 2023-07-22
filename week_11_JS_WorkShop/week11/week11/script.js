function clickMe() {
    let catNameInput = document.getElementById('petsName');
    console.log(catNameInput.value);


    let checks = document.getElementsByName('food');
    console.log(checks[0].checked);
    console.log(checks[1].checked);
    console.log(checks[2].checked);
}

clickMe();

function changeMe() {
    let changePic = document.getElementById('catPic');
    changePic.src = "https://www.bing.com/th?id=OIP.IOGGKcmJMYKPkMuimQDLnwAAAA&pid=3.1&cb=&w=300&h=300&p=0";
}

function select(sender) {
    sender.classList.add("selected");
}



// practice 1

// Найди карточку Стёпы в коде и запиши пол Стёпы в переменную 
// Измени пол Стёпы на мужской используя метод innerHTML

const genderOfCat = document.querySelector('.gender');
console.log(genderOfCat);

genderOfCat.innerHTML = "male";
console.log(genderOfCat);


// practice 2
// Напишите функцию countParagraphs(), которая подсчитывает количество абзацев <p> на веб-странице и выводит результат на экран. 

// Инструкция:
// 1. Создайте функцию countParagraphs(), которая не принимает аргументов.
// 2. Используя метод getElementsByTagName(), найдите все элементы <p> на странице.
// 3. Получите длину (количество) найденных элементов <p>
// 4. Выведите полученное количество абзацев на страницу с помощью функции alert() 


function countParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    alert(paragraphs.length);
  }
  
  // teacher's decision

  const paragraphs = document.getElementsByTagName('p');
  const resultElement = document.getElementById('result');

  const countParagraphs = () => {
    const count = paragraphs.length;
    alert('Число параграфов: ' + count);
  }



// practice 3
  // при клике по кнопке скрипт запустит код
button.onclick = function () {
    // напишите условие при котором будет переключаться класс white у кнопки (класс переключает цвет бэкграунда)
  button.classList.toggle("white");
  }
  
  button.onclick();
  
// practice 4
  // Заголовок, который будет изменять свой текст при наведении курсора.

//Найдите заголовок по id и запишите его в перемнную
let headName = document.getElementById('title')
// Добавляем обработчики событий mouseenter и mouseleave
title.addEventListener("mouseenter", function() {
  //Измените текст заголовка при наведении курсора с помощью метода textContent
  //Ваш код
  title.textContent = 'Hello, world!'
});

title.addEventListener("mouseleave", function() {
  //Восстанавите исходный текст заголовка при уходе курсора
  //Ваш код
  title.textContent = 'Привет, мир!'
});


// practice 5

//Найдите кнопку по id. Запишите её в переменную. Добавьте событие onclick на кнопку, при клике на которую, будет выводиться всплывающее окно с сообщением "Привет, мир!"

let button = document.getElementById("myButton");

button.onclick = function() {
  alert('Привет, мир!');
};

// practice 6

// Есть список сообщений
// При помощи JavaScript для каждого сообщения добавьте слушатель события на крестик (один элемент - один слушатель), который по нажатию удаляет <div>

let horse = document.querySelector('.remove-button-horse');
let donkey = document.querySelector('.remove-button-donkey');
let cat = document.querySelector('.remove-button-cat');

function removeDivHorse() {
  let divHorse = document.querySelector('.horse');
  divHorse.remove();
}
horse.addEventListener('click', removeDivHorse);

function removeDivDonkey() {
  let divDonkey = document.querySelector('.donkey');
  divDonkey.remove();
}
donkey.addEventListener('click', removeDivDonkey);

function removeDivCat() {
  let divCat = document.querySelector('.cat');
  divCat.remove();
}
cat.addEventListener('click', removeDivCat);

// second way to answer
let horse = document.querySelector('.remove-button-horse');
let donkey = document.querySelector('.remove-button-donkey');
let cat = document.querySelector('.remove-button-cat');

function removeDiv() {
  let divElem = document.querySelector('.horse, .donkey, .cat');
  divElem.remove();
}

horse.addEventListener('click', removeDiv);
donkey.addEventListener('click', removeDiv);
cat.addEventListener('click', removeDiv);



