const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [];

initializeTodos();
loadSavedTodos(checkLogedIn2());

function checkLogedIn2() {
  for (let i = 0; i < localStorage.length; i++) {
    if (JSON.parse(localStorage.getItem(userNameKeys[i]))[1] == true) {
      return `${userNameKeys[i]}Todos`;
    }
  }
}

loginForm.addEventListener("submit", function () {
  loadSavedTodos(checkLogedIn2());
});

loginForm.addEventListener("submit", initializeTodos);

function deleteBtn(event) {
  const listOfTodo = event.target.parentElement;
  listOfTodo.remove();
  const spanOfTodo = listOfTodo.querySelector("span").innerText;
  todos.splice(todos.indexOf(spanOfTodo), 1);
  saveTodo(checkLogedIn2());
}

function printTodos(todoInputValue) {
  const listOfTodo = document.createElement("li");
  todoList.appendChild(listOfTodo);

  const spanOfTodo = document.createElement("span");
  listOfTodo.appendChild(spanOfTodo);
  spanOfTodo.innerText = todoInputValue;

  const buttonOfDeleteTodo = document.createElement("button");
  listOfTodo.appendChild(buttonOfDeleteTodo);
  buttonOfDeleteTodo.innerText = "❌";

  buttonOfDeleteTodo.addEventListener("click", deleteBtn);
}

function saveTodo(userKeyName) {
  localStorage.setItem(userKeyName, JSON.stringify(todos));
}

function initializeTodos() {
  if (JSON.parse(localStorage.getItem(checkLogedIn2()))) {
    todos = JSON.parse(localStorage.getItem(checkLogedIn2()));
  }
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  todos.push(todoInputValue);
  saveTodo(checkLogedIn2());
  printTodos(todoInputValue);
}

todoForm.addEventListener("submit", handleTodoSubmit);

function loadSavedTodos(userKeyName) {
  const savedTodos = JSON.parse(localStorage.getItem(userKeyName));
  if (savedTodos) {
    savedTodos.forEach(printTodos);
  }
}
