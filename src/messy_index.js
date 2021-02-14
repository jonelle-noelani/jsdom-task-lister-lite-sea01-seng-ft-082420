// document.addEventListener("DOMContentLoaded", () => {
//   const formSubmit = document.getElementById("create-task-form");
  // const newTaskDescription = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority");
  // const newTaskUl = document.getElementById("tasks");
//   formSubmit.addEventListener("submit", createNewTask);

// });

const createNewTask = event => { 
  event.preventDefault(); 
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement('li');

  newTask.innerText = newTaskDescription.value;
  createButton(newTask);
  document.getElementById("tasks").appendChild(newTask);

  // addNewTask(newTask);
  event.target.reset();

};

// const addNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
//   createButton(task);
// }

const createButton = task => {
   const btn = document.createElement('button');

    btn.innerText = "X";
    btn.id = "tasks"; //?? why set an id, so it deletes with the task?

    task.appendChild(btn)
    // btn.addEventListener("click", deleteTask(e));
    btn.addEventListener('click',  (e) => deleteTask(e))


}

const deleteTask = (e) => {
  console.log("hit the deleteTask method")
  const theList = document.getElementById("tasks");
  let selectedTask = e.target.parentElement
  theList.removeChild(selectedTask)
  
  // theList.removeChild(theList.childNodes[1])
  // document.getElementById("tasks").removeChild('li');
}

document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))



// btn.addEventListener('click',  (e) => deleteTask(e))

// document.querySelector('#tasks').addEventListener('click',  (e) => deleteTask(e))

// const removeTask = event => {
//   event.preventDefault();
//   btn.addEventListener("click", deleteTask);
//   li.appendChild(btn);
