const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const userNameKeys2 = Object.keys(localStorage);
// const LOCALSTORAGE_TODO_KEY = "Todos";

loadSavedTodos(checkLogedIn2());

function checkLogedIn2() {
  for (let i = 0; i < localStorage.length; i++) {
    if (JSON.parse(localStorage.getItem(userNameKeys2[i]))[1] == true) {
      return `${userNameKeys2[i]}Todos`;
    }
  }
}

function deleteBtn(event) {
  const listOfTodo = event.target.parentElement;
  listOfTodo.remove();
  const liOfTodo = event.target.parentElement;
  const spanOfTodo = liOfTodo.querySelector("span").innerText;
  todos.splice(todos.indexOf(spanOfTodo), 1);
  saveTodo(checkLogedIn2());
  liOfTodo.remove();
}

function printTodos(todoInputValue) {
  const liOfTodo = document.createElement("li");
  todoList.appendChild(liOfTodo);

  const spanOfTodo = document.createElement("span");
  liOfTodo.appendChild(spanOfTodo);
  spanOfTodo.innerText = todoInputValue;

  const buttonOfDeleteTodo = document.createElement("button");
  liOfTodo.appendChild(buttonOfDeleteTodo);
  buttonOfDeleteTodo.innerText = "❌";

  buttonOfDeleteTodo.addEventListener("click", deleteBtn);
}

function saveTodo(userKeyName) {
  localStorage.setItem(userKeyName, JSON.stringify(todos));
}

let todos = [];

if (JSON.parse(localStorage.getItem(checkLogedIn2()))) {
  todos = JSON.parse(localStorage.getItem(checkLogedIn2()));
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
