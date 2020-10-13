const newTaskDescription = document.getElementById("new-task-description");
const newTask = document.createElement('li')

const createNewTask = event => { 
  event.preventDefault(); 
  newTask.innerText = newTaskDescription.value;
  addNewTask(newTask);
}

const addNewTask = task => {
  document.getElementById("tasks").appendChild(task);
  createButton();
}

const createButton = btn => {
    btn = document.createElement('button');
    btn.innerText = "X";
    btn.id = "tasks"; //?? why set an id
    newTask.appendChild(btn)
}

const deleteTask = e => {
  document.getElementById("tasks").removeChild('li');
}

document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))

// btn.addEventListener('click',  (e) => deleteTask(e))

// document.querySelector('#tasks').addEventListener('click',  (e) => deleteTask(e))

// const removeTask = event => {
//   event.preventDefault();
//   btn.addEventListener("click", deleteTask);
//   li.appendChild(btn);
// }