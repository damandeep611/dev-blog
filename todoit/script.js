//js
let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addTaskBtn = document.getElementById("inputBtn");

const deleteall = document.getElementById("deleteAll");
const modal = document.getElementById("confirmModal");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");
const taskCounter = document.getElementById("todoCount");

// initializing the list

document.addEventListener("DOMContentLoaded", function () {
  addTaskBtn.addEventListener("click", addTask);
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
  deleteall.addEventListener("click", deleteAllTasks);
  displayTasks();
});

function addTask() {
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    todo.push({ text: newTask, disabled: false });
    saveToLocalStorage();
    todoInput.value = "";
    displayTasks();
  }
}

//to display tasks that are added
function displayTasks() {
  todoList.innerHTML = "";
  todo.forEach((item, index) => {
    const p = document.createElement("p");
    p.innerHTML = `
      <div class="flex w-full items-center justify-between my-2 py-4 border-y">
        <input type="checkbox" class="todo-checkbox" id="input-${index}" ${
      item.disabled ? "checked" : ""
    }>
        <p id="todo-${index}" class="${
      item.disabled ? "line-through" : ""
    }" onclick="editTask(${index})">${item.text}</p>
        <span class="closeBtn cursor-pointer" onclick="deleteTask(${index})"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</span>
      </div>
    `;
    p.querySelector(".todo-checkbox").addEventListener("change", () =>
      toggleTask(index)
    );
    todoList.appendChild(p);
  });
  taskCounter.textContent = todo.length;
}

// to edit the tasks
function editTask(index) {
  const todoItem = document.getElementById(`todo-${index}`);
  const existingText = todo[index].text;
  const inputElement = document.createElement("input");

  inputElement.value = existingText;
  todoItem.replaceWith(inputElement);
  inputElement.focus();

  inputElement.addEventListener("blur", function () {
    const updatedText = inputElement.value.trim();
    if (updatedText) {
      todo[index].text = updatedText;
      saveToLocalStorage();
    }
    displayTasks();
  });
}

//to delete a single task
function deleteTask(index) {
  todo.splice(index, 1);
  saveToLocalStorage();
  displayTasks();
}
//cross the task when completed
function toggleTask(index) {
  todo[index].disabled = !todo[index].disabled;
  saveToLocalStorage();
  displayTasks();
}
//to show delete all taks modal
function deleteAllTasks() {
  modal.style.display = "flex";
}
//cancel delete
cancelDelete.addEventListener("click", () => {
  modal.style.display = "none";
});
//delete all tasks
confirmDelete.addEventListener("click", () => {
  todo = [];
  saveToLocalStorage();
  displayTasks();
  modal.style.display = "none";
});
//and if someone clicks outside the modal window then also display none
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//saves to local storage
function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(todo));
}
