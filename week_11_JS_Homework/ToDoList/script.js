// 1. Create Variables

const inputTask = document.getElementById('inputText');
const pushButton = document.getElementById('button');
const list = document.getElementById('list');
const listItem = document.querySelectorAll('.list-group-item');
// const buttonDone = document.querySelector('.image-btn');


// 2. Creating a Function createTask()
function createTask() {
	let newTaskList = document.createElement('li');
	newTaskList.textContent = inputTask.value;
    
  newTaskList.className = 'list-group-item','text-dark', 'text-opacity-75', 'd-flex', 'justify-content-between';
	list.append(newTaskList);   
    inputTask.value = '';
}

pushButton.addEventListener('click', createTask);
// document.querySelector('#button').onclick = createTask;


// 3. Creating a Function checkTask()

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('completed');
    }
  }, false);


/* Second way (when there is just tag <li></li>)
function checkTask(event) {
  event.target.classList.toggle('completed');
}
list.addEventListener('click', checkTask);
*/