//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraph0 = document.getElementById('practicum0');
function makeZero() {
	paragraph0.innerText = 'Ты нашёл элемент и изменил его текст!';
}
document.querySelector('.b-0').onclick = makeZero;


//Задание 1
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraph = document.getElementById('practicum');
function makeOne() {
    paragraph.textContent = 'Привет!';
}
document.querySelector('.b-1').onclick = makeOne;


//Задание 2
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const span2 = document.getElementById('practicum2');
function makeTwo() {
    span2.innerHTML = 'Привет, Мир!';
}
document.querySelector('.b-2').onclick = makeTwo;


//Задание 3
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const headNewName3 = document.querySelector('#practicum3');
function makeThree() {
    headNewName3.textContent = "Заголовок изменен!";
}
document.querySelector('.b-3').onclick = makeThree;


//Задание 4
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента

const divNewColor4 = document.querySelector('#practicum4');
function makeFour() {
    divNewColor4.style.backgroundColor = 'red'; 
}
document.querySelector('.b-4').onclick = makeFour;


//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы

const inputNewValue4 = document.getElementById('practicum5');
function makeFive() {
    inputNewValue4.value = 'Новое значение';
}
document.querySelector('.b-5').onclick = makeFive;


//Задание 6
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента

function makeSix() {
    let img6 = document.getElementById('practicum6');
	/* Первый способ
	img6.src = 'newimage.jpg';
	img6.src = './assets/222.jpg';
	img6.alt = 'Новое изображение';
	*/

	// Второй способ
    img6.setAttribute('src', './assets/222.jpg');
    img6.setAttribute('alt', 'Новое изображение');
	// img6.setAttribute('src', 'newimage.jpg');
}
document.querySelector('.b-6').onclick = makeSix;


//Задание 7
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента

function makeSeven() {
    let aNewAddress7 = document.querySelector('#practicum7');
	aNewAddress7.href = 'https://www.google.com';
	aNewAddress7.textContent = 'Ссылка на Google';
}
document.querySelector('.b-7').onclick = makeSeven;


//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeEight() {
    //Найдите элемент x
	let ulParent8 = document.getElementById('practicum8');
    //Создайте новый пункт списка y
	let newElemLi8 = document.createElement('li');
    //Добавьте значение в созданный пункт списка y
	newElemLi8.textContent = 'Новый элемент';
    //Добавьте в список х новый элемент y
	ulParent8.append(newElemLi8)
}

document.querySelector('.b-8').onclick = makeEight;


//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeNine() {
    //Найдите элемент
	let selectParent9 = document.getElementById('practicum9');
    //Создайте новый элемент
	let newElemOption9 = document.createElement('option');
    //Добавьте текст в созданный эелемент
	newElemOption9.textContent = 'Новый вариант';
    //Добавьте новый элемент в выпадающий список
	selectParent9.append(newElemOption9)
}
document.querySelector('.b-9').onclick = makeNine;


//Задание 10
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента

const div10 = document.getElementById('practicum10');
function makeTen() {
    div10.style.display = 'none'; 
}
document.querySelector('.b-10').onclick = makeTen;


//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента

const div11 = document.getElementById('practicum11');
function makeEleven() {
    div11.style.width = '400px'; 
	div11.style.height = '200px'; 
}
document.querySelector('.b-11').onclick = makeEleven;


//Задание 12
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента

const div12 = document.querySelector('#practicum12');

function makeTwelve() {
	div12.style.width = '400px'; 
	div12.style.height = '200px'; 
}

// div12.classList.toggle("practicum12");


//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента

function makeThirteen() {
    let findOl13 = document.getElementsByTagName('ol')[0];
	findOl13.textContent = 'Первый!';
}
document.querySelector('.b-13').onclick = makeThirteen;


//Задание 14
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

function makeFourteen() {
    //Найдите все элементы <p>
	const paragraphAll = document.querySelectorAll('p');
    //const paragraphs = ваш код;
    paragraphAll.forEach(function (paragraph) {
        //Измените их текстовое содержимое у paragraph
		paragraph.innerHTML = 'Огого, что могу!';
    });
}

document.querySelector('.b-14').onclick = makeFourteen;

//Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.



//Задание 15
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента

const div15 = document.getElementById('practicum15');
function makeFifteen() {
    div15.classList.remove('practicum15');
}
document.querySelector('.b-15').onclick = makeFifteen;


//Задание 16
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента

const div16 = document.getElementById('practicum16');
function makeSixteen() {
    div16.classList.add('practicum16');
}
document.querySelector('.b-16').onclick = makeSixteen;


//Задание 17
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента

const div17 = document.getElementById('practicum17');
function makeSeventeen() {
    div17.classList.toggle('color');
}
document.querySelector('.b-17').onclick = makeSeventeen;


//Задание 18
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента


const div18 = document.getElementById('practicum18');


function makeEighteen() {
    div18.classList.add('active');
}

// div18.classList.toggle('active');

document.querySelector('.b-18').onclick = makeEighteen;


//Задание 19
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента

const div19 = document.getElementById('practicum19');
function makeNineteen() {
    div19.classList.remove('active');
}
document.querySelector('.b-19').onclick = makeNineteen;


//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

const div20 = document.getElementById('practicum20');
function makeTwenty() {
	const newParagraph20 = document.createElement('p');
	newParagraph20.textContent = 'Добавлено в начало';
	div20.prepend(newParagraph20);
    // div20.prepend('<p>"Добавлено в начало"</p>')
}
document.querySelector('.b-20').onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

const div21 = document.getElementById('practicum21');
function makeTwentyOne() {
    const newParagraph21 = document.createElement('p');
	newParagraph21.textContent = 'Добавлено в конец';
	div21.append(newParagraph21);
}
document.querySelector('.b-21').onclick = makeTwentyOne;


//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

function makeTwentyTwo() {
    //1 шаг: Найдите элемент
	let img22 = document.getElementById('practicum22');
    //2 шаг: Создайте переменную, которая проверяет наличие атрибута у найденного элемента
	let attributeImg22 = img22.hasAttribute('src') // true
    //3 шаг: Найдите элемент, в который нужно вставить значение
    console.log(attributeImg22); // true
    //4 шаг: Добавьте в эелемент текстовое значение 2 шага. Например: переменная = 'Атрибут "src" присутствует: ' + название переменной из 2 шага;
	console.log('Задание 22: ' + 'Атрибут "src" присутствует: ' + attributeImg22); // Задание 22: Атрибут "src" присутствует: true
}
document.querySelector('.b-22').onclick = makeTwentyTwo;


//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

function makeTwentyThree() {
    let a23 = document.getElementById('practicum23');
	a23.removeAttribute('href'); 
}
document.querySelector('.b-23').onclick = makeTwentyThree;


//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

function makeTwentyFour() {
    let input24 = document.getElementById('practicum24');
	input24.setAttribute('value', 'Новое значение');
}
document.querySelector('.b-24').onclick = makeTwentyFour;


//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута

function makeTwentyFive() {
    //1 шаг: Найдите элемент
	let div25 = document.getElementById('practicum25');
    //2 шаг: Добавьте элементу, найденному в первом шаге, атрибут: ('data-info', 'Дополнительная информация');
	div25.setAttribute('data-info', 'Дополнительная информация');
    //3 шаг: Запишите значение атрибута в переменную
	valueDiv25 = div25.getAttribute('data-info')

    //4 шаг: Найдите элемент, в который нужно вставить значение из 3 шага
	console.log(div25.hasAttribute('data-info')); // true
	console.log(div25.getAttribute('data-info')); // Дополнительная информация

    //5 шаг: Добавьте в элемент 4 шага текстовое значение 3 шага. Например: переменная = 'Добавленный атрибут: ' + название переменной из 3 шага;
	console.log('Задание 25: ' + 'Добавленный атрибут: ' + valueDiv25);
}

document.querySelector('.b-25').onclick = makeTwentyFive;


//Задание 26
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

const button = document.querySelector('.b-26');
const parent = button.closest('.parent')

const makeTwentySix = () => {
    parent.style.backgroundColor = 'red';
};

document.querySelector('.b-26').onclick = makeTwentySix;


//Задание 27
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

function makeTwentySeven() {
    //Найдите переменную
	const div27 = document.getElementById('practicum27');
    //Создайте переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');
	const result27 = div27.classList.contains('highlight');
    //Найдите переменную, в которую нужно вывести результат
	console.log(result27); // true
    //Запишите результат в переменную

}
document.querySelector('.b-27').onclick = makeTwentySeven;


//Задание 28
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события

const buttonTaskTwentyEight = document.getElementById('button28');
function handleClick() {
    console.log('Кнопка нажата');
}
//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight
buttonTaskTwentyEight.onclick = handleClick;


//Задание 29
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

const input29 = document.getElementById('input29');
function handleChange() {
    console.log('Значение изменено');
}
//Ваш код
input29.onchange = handleChange;


//Задание 30
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

const div30 = document.getElementById('div30');
function handleMouseOver() {
    console.log('Курсор наведен на элемент');
}
//Ваш код
div30.onmouseover = handleMouseOver;




