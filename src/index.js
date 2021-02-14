const createNewTask = event => { 
  event.preventDefault(); 
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement('li');

  newTask.innerText = newTaskDescription.value;
  createButton(newTask);
  document.getElementById("tasks").appendChild(newTask);

  event.target.reset();
};

const createButton = task => {
   const btn = document.createElement('button');

    btn.innerText = "X";
    btn.id = "tasks"; 

    task.appendChild(btn)
    btn.addEventListener('click',  (e) => deleteTask(e))
}

const deleteTask = (e) => {
  const theList = document.getElementById("tasks");
  let selectedTask = e.target.parentElement
  theList.removeChild(selectedTask)
}

document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))